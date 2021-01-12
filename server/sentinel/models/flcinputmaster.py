from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    String,
    Sequence,
    Float,
    Date,
    DateTime,
)

from .meta import Base

class FlcInputTable(Base):
    __tablename__ = 'sen_flc_input_table'
    POLICY_NO = Column(String(20), nullable=False)
    PLAN_ID = Column(String(20), nullable=True)
    UIN = Column(String(20), nullable=False)
    ISFREELOOK = Column(Integer, nullable=False)
    CVG_RT_AGE = Column(String(20), nullable=True)
    CVG_SEX_CD = Column(String(20), nullable=True)
    CVG_SMKR_CD = Column(String(20), nullable=True)
    DOC = Column(Date, nullable=True)
    DFAAPPROVALDATE = Column(Date, nullable=True)
    INWARDDATE = Column(Date, nullable=True)
    STAMPDUTYFEE = Column(Float, nullable=True)
    MEDICALFEE = Column(Float, nullable=True)
    MORTALITY_FACT = Column(String(20), nullable=True)
    SUSPENSEAMOUNT = Column(Float, nullable=True)
    PREMIUMPAID = Column(Float, nullable=True)
    INSTA_PREMIUM = Column(String(20), nullable=False)
    FREQUENCY = Column(String(20), nullable=False)
    CVG_ORIG_FACE_AMT = Column(String(20), nullable=False)
    ANNUITYINSTALLMENTSPAID = Column(String(20), nullable=True)
    MORTALITYCHARGES = Column(String(20), nullable=True)
    MORTALITYCHARGESSGST = Column(Float, nullable=True)
    MORTALITYCHARGESIGST = Column(Float, nullable=True)
    MORTALITYCHARGESUTGST = Column(Float, nullable=True)
    MORTALITYCHARGESCGST = Column(Float, nullable=True)
    MORTALITYCHARGESST = Column(Float, nullable=True)
    MEDICALFEEIGST = Column(Float, nullable=True)
    MEDICALFEECGST = Column(Float, nullable=True)
    MEDICALFEESGST = Column(Float, nullable=True)
    MEDICALFEEUTGST = Column(Float, nullable=True)
    STAMPDUTYIGST = Column(Float, nullable=True)
    STAMPDUTYCGST = Column(Float, nullable=True)
    STAMPDUTYSGST = Column(Float, nullable=True)
    STAMPDUTYUTGST = Column(Float, nullable=True)
    REFUNDAMOUNT = Column(Float, nullable=True)
    PENAL_TDS = Column(String(30), nullable=True)
    PENAL_INTEREST = Column(String(20), nullable=True)
    WFPHASE = Column(String(20), nullable=False)
    WFTHREADID = Column(Integer, nullable=False,primary_key=True)
    CURRENT_DATE = Column(String(20), nullable=False)
    TIMESTAMP = Column(String(20), nullable=False)
    MEDICAL_FLAG = Column(String(20), nullable=False)
    ANNUITY_INSTALLMENT = Column(String(20), nullable=True)

Index('my_index', mysql_length=255)