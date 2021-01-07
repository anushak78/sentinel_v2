from pyramid.response import FileResponse
import logging
import os
log = logging.getLogger(__name__)

from pyramid.view import (
    view_config
    )

from .views import home_view

def includeme(config):
    config.add_route('home', '/')
    config.add_route('index', '/index.html')
    config.commit()
    config.add_notfound_view(home_view)
