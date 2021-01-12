from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    String,
    Sequence,
    Float,
    Date,
)

from .meta import Base

class FlcOutputTable(Base):
    __tablename__ = 'sen_flc_before_qc'
    POLICY_NO = Column(String(20), nullable=False)
    DOC	= Column(Date, nullable=True)
    DFAPPROVAL_DATE	= Column(Date, nullable=True)
    INWARDDATE = Column(Date, nullable=False)
    MORTALITY_FACTOR = Column(String(20), nullable=False)	
    SUM_ASSURED	= Column(String(20), nullable=False)
    MORTALITY_CHARGES = Column(String(20), nullable=True)
    AUDITED_MORTALITY_CHARGES =	Column(String(20), nullable=True)
    PREMIUM_PAID = Column(Float, nullable=True)	
    STAMPDUTY_FEE = Column(Float, nullable=True)
    AUDITED_STAMPDUTY_FEE = Column(String(20), nullable=True)
    STAMPDUTY_STATUS = Column(String(20), nullable=True)
    AUDITED_PREMIUM_PAID = Column(String(20), nullable=True)	
    PREMIUM_STATUS = Column(String(20), nullable=True) 
    NET_PAYABLE	= Column(Float, nullable=True)
    AUDITED_NET_PAYABLE	= Column(Float, nullable=True)
    NET_PAYABLE_STATUS = Column(String(20), nullable=True)
    WFTHREADID = Column(Integer, nullable=False,primary_key=True)
    MEDICAL_FLAG = Column(String(20), nullable=True)
    MEDICAL_STATUS = Column(String(20), nullable=True)


class FlcOutputTablePostQC(Base):
    __tablename__ = 'sen_flc_after_qc'
    POLICY_NO = Column(String(20), nullable=False)
    DOC	= Column(Date, nullable=True)
    DFAPPROVAL_DATE	= Column(Date, nullable=True)
    INWARDDATE = Column(Date, nullable=False)
    MORTALITY_FACTOR = Column(String(20), nullable=False)	
    SUM_ASSURED	= Column(String(20), nullable=False)
    MORTALITY_CHARGES = Column(String(20), nullable=True)
    AUDITED_MORTALITY_CHARGES =	Column(String(20), nullable=True)
    PREMIUM_PAID = Column(Float, nullable=True)	
    STAMPDUTY_FEE = Column(Float, nullable=True)
    AUDITED_STAMPDUTY_FEE = Column(String(20), nullable=True)
    STAMPDUTY_STATUS = Column(String(20), nullable=True)
    AUDITED_PREMIUM_PAID = Column(String(20), nullable=True)	
    PREMIUM_STATUS = Column(String(20), nullable=True) 
    NET_PAYABLE	= Column(Float, nullable=True)
    AUDITED_NET_PAYABLE	= Column(Float, nullable=True)
    NET_PAYABLE_STATUS = Column(String(20), nullable=True)
    WFTHREADID = Column(Integer, nullable=False,primary_key=True)
    MEDICAL_FLAG = Column(String(20), nullable=True)
    MEDICAL_STATUS = Column(String(20), nullable=True)
    PQ_QC_FLAG = Column(String(20), nullable=True)
    PQ_QC_REMARKS = Column(String(50), nullable=True)

Index('my_index', mysql_length=255)
