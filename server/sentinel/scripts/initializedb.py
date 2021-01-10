import os
import sys
import transaction

from pyramid.paster import (
    get_appsettings,
    setup_logging,
)

from pyramid.scripts.common import parse_vars

from ..models import UserMaster
from ..models import UserLoginMaster
from ..models import ModuleMaster
from ..models import TxnActivityMaster
from ..models import CaseStatusMaster

from ..models.meta import Base
from ..models import (
    get_engine,
    get_session_factory,
    get_tm_session,
)


def usage(argv):
    cmd = os.path.basename(argv[0])
    print('usage: %s <config_uri> [var=value]\n'
          '(example: "%s development.ini")' % (cmd, cmd))
    sys.exit(1)


def _add_status(dbsession):
    STATUS = (
        ('APPROVE', 'Admin'),
        ('REJECT', 'Admin')
    )

    for status_name, created_by in STATUS:
        c = CaseStatusMaster(status_name, created_by)
        dbsession.add(c)


def _add_modules(dbsession):
    MODULES = (
        ('NON ULIP FLC', 'Admin'),
        ('ULIP FLC', 'Admin')
    )
    for module_name, created_by in MODULES:
        m = ModuleMaster(module_name, created_by)
        dbsession.add(m)


def _add_actions(dbsession):
    ACTIONS = (
        ('INPUT PULL', 'Admin'),
        ('LOGIC PARSE', 'Admin'),
        ('OUTPUT PUBLISH', 'Admin')
    )
    for activity_name, created_by in ACTIONS:
        a = TxnActivityMaster(activity_name, created_by)
        dbsession.add(a)


def main(argv=sys.argv):
    if len(argv) < 2:
        usage(argv)
    config_uri = argv[1]
    options = parse_vars(argv[2:])
    setup_logging(config_uri)
    settings = get_appsettings(config_uri, options=options)

    engine = get_engine(settings)
    Base.metadata.create_all(engine)

    session_factory = get_session_factory(engine)

    with transaction.manager:
        dbsession = get_tm_session(session_factory, transaction.manager)

        model = UserMaster(name='Admin', login='Admin', role=0,
                           title=0, designation='Admin', status='A')
        dbsession.add(model)

        print(model.sum_name, model.sum_login)

        model_n = UserLoginMaster(login='Admin', name='Admin', password='A',
                                  role=0, title=0, designation='Admin', status='A')

        # model_module = ModuleMaster(
        #     module_name='NON ULIP FLC ', created_by='Admin')

        _add_modules(dbsession)
        _add_actions(dbsession)
        _add_status(dbsession)

        dbsession.add(model_n)
