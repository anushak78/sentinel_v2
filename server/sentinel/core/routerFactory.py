# Copyright (C) 2018 NSEIT Limited, Mumbai. All rights reserved.
#
# This program and the accompanying materials are made available
# under the terms described in the LICENSE file which accompanies
# this distribution. If the LICENSE file was not attached to this
# distribution or for further clarifications, please contact
# legal@nseit.com.

import logging
import enum

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

from ..biz.nonulipflc import (
    ProcessInput,
    ProcessLogic,
    ProcessOutput
)

log = logging.getLogger(__name__)


class Modules (enum.Enum):
    NON_ULIP_FLC = 1
    ULIP_FLC = 2


class Actions (enum.Enum):
    PROCESS_INPUT = 1
    PROCESS_LOGIC = 2
    PROCESS_OUTPUT = 3


svc_processInput = Service(
    name="core.processInput", permission=NO_PERMISSION_REQUIRED,
    path="/core/processInput", cors_policy=cors.POLICY)

svc_processLogic = Service(
    name="core.processLogic", permission=NO_PERMISSION_REQUIRED,
    path="/core/processLogic", cors_policy=cors.POLICY)


@svc_processInput.post(require_csrf=False)
def processInput(request):
    log.info("Inside Input Pull Factory Function")

    module_id = request.json_body['module_id']
    request_action = request.json_body['request_action']
    requested_by = request.json_body['requested_by']

    if(module_id == Modules.NON_ULIP_FLC):
        if(request_action == Actions.PROCESS_INPUT)
        processInput()  # Implement the Process

    return ret


def processLogic(request):
    log.info("Inside Process Logic Factory Function")

    module_id = request.json_body['module_id']
    request_action = request.json_body['request_action']
    requested_by = request.json_body['requested_by']

    if(module_id == Modules.NON_ULIP_FLC):
        if(request_action == Actions.PROCESS_LOGIC)
        ProcessInput()

    return ret


def processLogic(request):
    log.info("Inside Process Logic Factory Function")

    module_id = request.json_body['module_id']
    request_action = request.json_body['request_action']
    requested_by = request.json_body['requested_by']

    if(module_id == Modules.NON_ULIP_FLC):
        if(request_action == Actions.PROCESS_OUTPUT)
        ProcessOutput()

    return ret


def processOutput(request):
    log.info("Inside Process Output Factory Function")

    module_id = request.json_body['module_id']
    request_action = request.json_body['request_action']
    requested_by = request.json_body['requested_by']

    if(module_id == Modules.NON_ULIP_FLC):
        if(request_action == Actions.PROCESS_OUTPUT)
        ProcessLogic()

    return ret


# Local Variables:
# mode: python
# End:
