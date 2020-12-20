from pyramid.response import FileResponse
import logging
import os
log = logging.getLogger(__name__)

from pyramid.view import (
    view_config
    )


@view_config(route_name='home')
def home_view(request):
    log.debug('In home view')
    folder_name = request.registry.settings['client_url']
    response = FileResponse(os.path.join(folder_name,'index.html'), \
                            request=request, content_type='text/html')
    return response
