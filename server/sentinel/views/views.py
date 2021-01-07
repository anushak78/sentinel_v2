import os

from pyramid.view import view_config
from pyramid.renderers import render_to_response
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from pyramid.httpexceptions import HTTPFound


@view_config(route_name='home', permission=NO_PERMISSION_REQUIRED)
def home_view(request):
    pub_dir = request.registry.settings['client_url']
    return render_to_response(
        os.path.join(pub_dir, 'index.html'), {}, request=request)


@view_config(route_name='index', permission=NO_PERMISSION_REQUIRED)
def redirect_to_home_view(request):
    url = request.route_url('home')
    return HTTPFound(location=url)

