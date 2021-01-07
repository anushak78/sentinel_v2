# Copyright (C) 2018 NSEIT Limited, Mumbai. All rights reserved.
#
# This program and the accompanying materials are made available
# under the terms described in the LICENSE file which accompanies
# this distribution. If the LICENSE file was not attached to this
# distribution or for further clarifications, please contact
# legal@nseit.com.

import logging

from pyramid.security import (
    NO_PERMISSION_REQUIRED,
    Authenticated,
    remember,
    forget,
)
from pyramid.csrf import new_csrf_token

from cornice import Service

from ..models.usermaster import UserLoginMaster
from . import cors

log = logging.getLogger(__name__)

svc_login = Service(
    name="core.login", permission=NO_PERMISSION_REQUIRED,
    path="/core/login", cors_policy=cors.POLICY)

svc_logout = Service(
    name="core.logout", permission=NO_PERMISSION_REQUIRED,
    path="/core/logout", cors_policy=cors.POLICY)

svc_whoami = Service(
    name="core.whoami", permission=NO_PERMISSION_REQUIRED,
    path="/whoami", cors_policy=cors.POLICY)

@svc_login.post(require_csrf=False)
def login(request):
    log.info("Inside Login Function")
    login = request.json_body['login']
    passwd = request.json_body['password']
    #role = request.json_body['role']
    role = 0
    ret = None
    # TODO: Board role
    # Admin and VO role login
    if role == 0 or role == 2:
        user = UserLoginMaster.by_login(request.dbsession, login)
        if user and user.check_password(passwd):
            headers = remember(request, login)
            request.response.headerlist.extend(headers)
            # set the new csrf token in response
            new_csrf_token(request)
            request.session["login"] = user.slum_login
            request.session["name"] = user.slum_name
            request.session["id"] = user.id
            request.session["role"] = user.slum_role
            request.session["title"] = user.slum_title
            request.session["token"] = new_csrf_token(request)
            ret = compute_whoami(request, login)
        else:
            headers = forget(request)
            request.response.headerlist.extend(headers)
            ret = compute_whoami(request, None)

    return ret


@svc_logout.post(require_csrf=False)
def logout(request):
    headers = forget(request)
    request.response.headerlist.extend(headers)
    return {
        "code": 1,
        "message": "success",
        "data": {}
    }


@svc_whoami.get()
def whoami(request):
    login = request.authenticated_userid
    return compute_whoami(request, login)


def compute_whoami(request, login):
    result = {
        'authenticated': False,
        'login': None,
    }

    if login is None:
        return result

    result['authenticated'] = True
    result['login'] = request.session['login']
    result['name'] = request.session['name']
    result['id'] = request.session['id']
    result['role'] = request.session['role']
    result['title'] = request.session['title']
    result['token'] = request.session['token']
    return result

# Local Variables:
# mode: python
# End:
