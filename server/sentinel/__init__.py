from pyramid.config import Configurator
from pyramid.session import SignedCookieSessionFactory
from pyramid.csrf import CookieCSRFStoragePolicy


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    my_session_factory = SignedCookieSessionFactory('itsaseekreet')
    with Configurator(settings=settings, session_factory=my_session_factory) as config:
        config.include('.models')
        config.include('cornice')
        config.include('pyramid_tm')
        config.include('pyramid_jinja2')
        config.add_jinja2_renderer('.html')
        config.include('.routes')
        config.include('.views')

        # Store the CSRF token in cookie as the Angular HttpClient reads
        # from the cookie to set the appropriate headers. Configure the
        # pyramid to use the same token name and X- header used by the
        # Angular
        csrf_policy = CookieCSRFStoragePolicy(cookie_name='XSRF-TOKEN')
        config.set_csrf_storage_policy(csrf_policy)
        config.set_default_csrf_options(
            require_csrf=True, token='XSRF-TOKEN', header='X-XSRF-TOKEN')

        config.scan()
        config.add_static_view(name='/', path=settings.get('client_url'))
    return config.make_wsgi_app()
