import * as Primitive from "./xml-primitives";
import OpenVasParser from ".";
import { OpenVas } from "./openvas-json";

// Source files:
// http://localhost:8080/schema-definition.xsd

interface BaseType {
  _exists: boolean;
  _namespace: string;
}
interface _ReportType extends BaseType {
  content_type: string;
  extension: string;
  format_id: string;
  id: string;
  comment: string;
  creation_time: Date;
  in_use: number;
  modification_time: Date;
  name: Date;
  owner: ReportTypeOwnerType;
  report: ReportTypeReportType[];
  report_format: ReportTypeReport_formatType;
  task: ReportTypeTaskType;
  writable: number;
}
interface ReportType extends _ReportType {
  constructor: { new (): ReportType };
}

interface _ReportTypeOwnerType extends BaseType {
  name: string;
}
interface ReportTypeOwnerType extends _ReportTypeOwnerType {
  constructor: { new (): ReportTypeOwnerType };
}

interface _ReportTypeReport_formatType extends BaseType {
  id: string;
  name: string;
}
interface ReportTypeReport_formatType extends _ReportTypeReport_formatType {
  constructor: { new (): ReportTypeReport_formatType };
}

interface _ReportTypeReportType extends BaseType {
  id: string;
  apps: ReportTypeReportTypeAppsType;
  closed_cves: ReportTypeReportTypeClosed_cvesType;
  errors: ReportTypeReportTypeErrorsType;
  filters: ReportTypeReportTypeFiltersType;
  gmp: ReportTypeReportTypeGmpType;
  host?: ReportTypeReportTypeHostType[];
  hosts: ReportTypeReportTypeHostsType;
  os: ReportTypeReportTypeOsType;
  ports: ReportTypeReportTypePortsType;
  report_format: string;
  result_count: ReportTypeReportTypeResult_countType;
  results: ReportTypeReportTypeResultsType[];
  scan_end: Date;
  scan_run_status: string;
  scan_start: Date;
  severity: ReportTypeReportTypeSeverityType;
  sort: ReportTypeReportTypeSortType;
  ssl_certs: ReportTypeReportTypeSsl_certsType;
  task: ReportTypeReportTypeTaskType;
  timestamp: Date;
  timezone: string;
  timezone_abbrev: string;
  vulns: ReportTypeReportTypeVulnsType;
}
interface ReportTypeReportType extends _ReportTypeReportType {
  constructor: { new (): ReportTypeReportType };
}

interface _ReportTypeReportTypeAppsType extends BaseType {
  count: number;
}
interface ReportTypeReportTypeAppsType extends _ReportTypeReportTypeAppsType {
  constructor: { new (): ReportTypeReportTypeAppsType };
}

interface _ReportTypeReportTypeClosed_cvesType extends BaseType {
  count: number;
}
interface ReportTypeReportTypeClosed_cvesType
  extends _ReportTypeReportTypeClosed_cvesType {
  constructor: { new (): ReportTypeReportTypeClosed_cvesType };
}

interface _ReportTypeReportTypeErrorsType extends BaseType {
  count: number;
  error?: ReportTypeReportTypeErrorsTypeErrorType[];
}
interface ReportTypeReportTypeErrorsType
  extends _ReportTypeReportTypeErrorsType {
  constructor: { new (): ReportTypeReportTypeErrorsType };
}

interface _ReportTypeReportTypeErrorsTypeErrorType extends BaseType {
  description: string;
  host: ReportTypeReportTypeErrorsTypeErrorTypeHostType;
  nvt: ReportTypeReportTypeErrorsTypeErrorTypeNvtType;
  port: string;
  scan_nvt_version: Date;
  severity: number;
}
interface ReportTypeReportTypeErrorsTypeErrorType
  extends _ReportTypeReportTypeErrorsTypeErrorType {
  constructor: { new (): ReportTypeReportTypeErrorsTypeErrorType };
}

interface _ReportTypeReportTypeErrorsTypeErrorTypeHostType extends BaseType {
  asset: ReportTypeReportTypeErrorsTypeErrorTypeHostTypeAssetType;
}
interface ReportTypeReportTypeErrorsTypeErrorTypeHostType
  extends _ReportTypeReportTypeErrorsTypeErrorTypeHostType {
  constructor: { new (): ReportTypeReportTypeErrorsTypeErrorTypeHostType };
}

interface _ReportTypeReportTypeErrorsTypeErrorTypeHostTypeAssetType
  extends Primitive._string {
  asset_id?: string;
}
interface ReportTypeReportTypeErrorsTypeErrorTypeHostTypeAssetType
  extends _ReportTypeReportTypeErrorsTypeErrorTypeHostTypeAssetType {
  constructor: {
    new (): ReportTypeReportTypeErrorsTypeErrorTypeHostTypeAssetType;
  };
}

interface _ReportTypeReportTypeErrorsTypeErrorTypeNvtType extends BaseType {
  oid?: string;
  cvss_base: number;
  name: string;
  type: string;
}
interface ReportTypeReportTypeErrorsTypeErrorTypeNvtType
  extends _ReportTypeReportTypeErrorsTypeErrorTypeNvtType {
  constructor: { new (): ReportTypeReportTypeErrorsTypeErrorTypeNvtType };
}

interface _ReportTypeReportTypeFiltersType extends BaseType {
  id: number;
  filter?: string[];
  keywords?: ReportTypeReportTypeFiltersTypeKeywordsType[];
  term?: string[];
}
interface ReportTypeReportTypeFiltersType
  extends _ReportTypeReportTypeFiltersType {
  constructor: { new (): ReportTypeReportTypeFiltersType };
}

interface _ReportTypeReportTypeFiltersTypeKeywordsType extends BaseType {
  keyword?: ReportTypeReportTypeFiltersTypeKeywordsTypeKeywordType[];
}
interface ReportTypeReportTypeFiltersTypeKeywordsType
  extends _ReportTypeReportTypeFiltersTypeKeywordsType {
  constructor: { new (): ReportTypeReportTypeFiltersTypeKeywordsType };
}

interface _ReportTypeReportTypeFiltersTypeKeywordsTypeKeywordType
  extends BaseType {
  column: string;
  relation: string;
  value: string;
}
interface ReportTypeReportTypeFiltersTypeKeywordsTypeKeywordType
  extends _ReportTypeReportTypeFiltersTypeKeywordsTypeKeywordType {
  constructor: {
    new (): ReportTypeReportTypeFiltersTypeKeywordsTypeKeywordType;
  };
}

interface _ReportTypeReportTypeGmpType extends BaseType {
  version: number;
}
interface ReportTypeReportTypeGmpType extends _ReportTypeReportTypeGmpType {
  constructor: { new (): ReportTypeReportTypeGmpType };
}

interface _ReportTypeReportTypeHostsType extends BaseType {
  count: number;
}
interface ReportTypeReportTypeHostsType extends _ReportTypeReportTypeHostsType {
  constructor: { new (): ReportTypeReportTypeHostsType };
}

interface _ReportTypeReportTypeHostType extends BaseType {
  asset: ReportTypeReportTypeHostTypeAssetType;
  detail?: ReportTypeReportTypeHostTypeDetailType[];
  end: Date;
  ip: string;
  port_count: ReportTypeReportTypeHostTypePort_countType;
  result_count: ReportTypeReportTypeHostTypeResult_countType;
  start: Date;
}
interface ReportTypeReportTypeHostType extends _ReportTypeReportTypeHostType {
  constructor: { new (): ReportTypeReportTypeHostType };
}

interface _ReportTypeReportTypeHostTypeAssetType extends Primitive._string {
  asset_id?: string;
}
interface ReportTypeReportTypeHostTypeAssetType
  extends _ReportTypeReportTypeHostTypeAssetType {
  constructor: { new (): ReportTypeReportTypeHostTypeAssetType };
}

interface _ReportTypeReportTypeHostTypeDetailType extends BaseType {
  extra: string;
  name: string;
  source: ReportTypeReportTypeHostTypeDetailTypeSourceType;
  value: string;
}
interface ReportTypeReportTypeHostTypeDetailType
  extends _ReportTypeReportTypeHostTypeDetailType {
  constructor: { new (): ReportTypeReportTypeHostTypeDetailType };
}

interface _ReportTypeReportTypeHostTypeDetailTypeSourceType extends BaseType {
  description: string;
  name: string;
  type: string;
}
interface ReportTypeReportTypeHostTypeDetailTypeSourceType
  extends _ReportTypeReportTypeHostTypeDetailTypeSourceType {
  constructor: { new (): ReportTypeReportTypeHostTypeDetailTypeSourceType };
}

interface _ReportTypeReportTypeHostTypePort_countType extends BaseType {
  page: number;
}
interface ReportTypeReportTypeHostTypePort_countType
  extends _ReportTypeReportTypeHostTypePort_countType {
  constructor: { new (): ReportTypeReportTypeHostTypePort_countType };
}

interface _ReportTypeReportTypeHostTypeResult_countType extends BaseType {
  false_positive: ReportTypeReportTypeHostTypeResult_countTypeFalse_positiveType;
  hole: ReportTypeReportTypeHostTypeResult_countTypeHoleType;
  info: ReportTypeReportTypeHostTypeResult_countTypeInfoType;
  log: ReportTypeReportTypeHostTypeResult_countTypeLogType;
  page: number;
  warning: ReportTypeReportTypeHostTypeResult_countTypeWarningType;
}
interface ReportTypeReportTypeHostTypeResult_countType
  extends _ReportTypeReportTypeHostTypeResult_countType {
  constructor: { new (): ReportTypeReportTypeHostTypeResult_countType };
}

interface _ReportTypeReportTypeHostTypeResult_countTypeFalse_positiveType
  extends BaseType {
  page: number;
}
interface ReportTypeReportTypeHostTypeResult_countTypeFalse_positiveType
  extends _ReportTypeReportTypeHostTypeResult_countTypeFalse_positiveType {
  constructor: {
    new (): ReportTypeReportTypeHostTypeResult_countTypeFalse_positiveType;
  };
}

interface _ReportTypeReportTypeHostTypeResult_countTypeHoleType
  extends BaseType {
  page: number;
}
interface ReportTypeReportTypeHostTypeResult_countTypeHoleType
  extends _ReportTypeReportTypeHostTypeResult_countTypeHoleType {
  constructor: { new (): ReportTypeReportTypeHostTypeResult_countTypeHoleType };
}

interface _ReportTypeReportTypeHostTypeResult_countTypeInfoType
  extends BaseType {
  page: number;
}
interface ReportTypeReportTypeHostTypeResult_countTypeInfoType
  extends _ReportTypeReportTypeHostTypeResult_countTypeInfoType {
  constructor: { new (): ReportTypeReportTypeHostTypeResult_countTypeInfoType };
}

interface _ReportTypeReportTypeHostTypeResult_countTypeLogType
  extends BaseType {
  page: number;
}
interface ReportTypeReportTypeHostTypeResult_countTypeLogType
  extends _ReportTypeReportTypeHostTypeResult_countTypeLogType {
  constructor: { new (): ReportTypeReportTypeHostTypeResult_countTypeLogType };
}

interface _ReportTypeReportTypeHostTypeResult_countTypeWarningType
  extends BaseType {
  page: number;
}
interface ReportTypeReportTypeHostTypeResult_countTypeWarningType
  extends _ReportTypeReportTypeHostTypeResult_countTypeWarningType {
  constructor: {
    new (): ReportTypeReportTypeHostTypeResult_countTypeWarningType;
  };
}

interface _ReportTypeReportTypeOsType extends BaseType {
  count: number;
}
interface ReportTypeReportTypeOsType extends _ReportTypeReportTypeOsType {
  constructor: { new (): ReportTypeReportTypeOsType };
}

interface _ReportTypeReportTypePortsType extends BaseType {
  max: number;
  start: number;
  count: number;
  port?: ReportTypeReportTypePortsTypePortType[];
}
interface ReportTypeReportTypePortsType extends _ReportTypeReportTypePortsType {
  constructor: { new (): ReportTypeReportTypePortsType };
}

interface _ReportTypeReportTypePortsTypePortType extends BaseType {
  host: string;
  severity: number;
  threat: string;
}
interface ReportTypeReportTypePortsTypePortType
  extends _ReportTypeReportTypePortsTypePortType {
  constructor: { new (): ReportTypeReportTypePortsTypePortType };
}

interface _ReportTypeReportTypeResult_countType extends BaseType {
  false_positive: ReportTypeReportTypeResult_countTypeFalse_positiveType;
  filtered: number;
  full: number;
  hole: ReportTypeReportTypeResult_countTypeHoleType;
  info: ReportTypeReportTypeResult_countTypeInfoType;
  log: ReportTypeReportTypeResult_countTypeLogType;
  warning: ReportTypeReportTypeResult_countTypeWarningType;
}
interface ReportTypeReportTypeResult_countType
  extends _ReportTypeReportTypeResult_countType {
  constructor: { new (): ReportTypeReportTypeResult_countType };
}

interface _ReportTypeReportTypeResult_countTypeFalse_positiveType
  extends BaseType {
  filtered: number;
  full: number;
}
interface ReportTypeReportTypeResult_countTypeFalse_positiveType
  extends _ReportTypeReportTypeResult_countTypeFalse_positiveType {
  constructor: {
    new (): ReportTypeReportTypeResult_countTypeFalse_positiveType;
  };
}

interface _ReportTypeReportTypeResult_countTypeHoleType extends BaseType {
  filtered: number;
  full: number;
}
interface ReportTypeReportTypeResult_countTypeHoleType
  extends _ReportTypeReportTypeResult_countTypeHoleType {
  constructor: { new (): ReportTypeReportTypeResult_countTypeHoleType };
}

interface _ReportTypeReportTypeResult_countTypeInfoType extends BaseType {
  filtered: number;
  full: number;
}
interface ReportTypeReportTypeResult_countTypeInfoType
  extends _ReportTypeReportTypeResult_countTypeInfoType {
  constructor: { new (): ReportTypeReportTypeResult_countTypeInfoType };
}

interface _ReportTypeReportTypeResult_countTypeLogType extends BaseType {
  filtered: number;
  full: number;
}
interface ReportTypeReportTypeResult_countTypeLogType
  extends _ReportTypeReportTypeResult_countTypeLogType {
  constructor: { new (): ReportTypeReportTypeResult_countTypeLogType };
}

interface _ReportTypeReportTypeResult_countTypeWarningType extends BaseType {
  filtered: number;
  full: number;
}
interface ReportTypeReportTypeResult_countTypeWarningType
  extends _ReportTypeReportTypeResult_countTypeWarningType {
  constructor: { new (): ReportTypeReportTypeResult_countTypeWarningType };
}

interface _ReportTypeReportTypeResultsType extends BaseType {
  max: number;
  start: number;
  result?: ReportTypeReportTypeResultsTypeResultType[];
}
interface ReportTypeReportTypeResultsType
  extends _ReportTypeReportTypeResultsType {
  constructor: { new (): ReportTypeReportTypeResultsType };
}

interface _ReportTypeReportTypeResultsTypeResultType extends BaseType {
  id?: string;
  comment: string;
  creation_time: Date;
  description: string;
  host: ReportTypeReportTypeResultsTypeResultTypeHostType;
  modification_time: Date;
  name: string;
  nvt: ReportTypeReportTypeResultsTypeResultTypeNvtType;
  original_severity: number;
  original_threat: string;
  owner: ReportTypeReportTypeResultsTypeResultTypeOwnerType;
  port: string;
  qod: ReportTypeReportTypeResultsTypeResultTypeQodType;
  scan_nvt_version: Date;
  severity: number;
  threat: string;
}
interface ReportTypeReportTypeResultsTypeResultType
  extends _ReportTypeReportTypeResultsTypeResultType {
  constructor: { new (): ReportTypeReportTypeResultsTypeResultType };
}

interface _ReportTypeReportTypeResultsTypeResultTypeHostType extends BaseType {
  asset: ReportTypeReportTypeResultsTypeResultTypeHostTypeAssetType;
  hostname: string;
}
interface ReportTypeReportTypeResultsTypeResultTypeHostType
  extends _ReportTypeReportTypeResultsTypeResultTypeHostType {
  constructor: { new (): ReportTypeReportTypeResultsTypeResultTypeHostType };
}

interface _ReportTypeReportTypeResultsTypeResultTypeHostTypeAssetType
  extends Primitive._string {
  asset_id?: string;
}
interface ReportTypeReportTypeResultsTypeResultTypeHostTypeAssetType
  extends _ReportTypeReportTypeResultsTypeResultTypeHostTypeAssetType {
  constructor: {
    new (): ReportTypeReportTypeResultsTypeResultTypeHostTypeAssetType;
  };
}

interface _ReportTypeReportTypeResultsTypeResultTypeNvtType extends BaseType {
  oid?: string;
  cvss_base: number;
  family: string;
  name: string;
  refs?: ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsType;
  severities: ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesType;
  solution: ReportTypeReportTypeResultsTypeResultTypeNvtTypeSolutionType;
  tags: string;
  type: string;
}
interface ReportTypeReportTypeResultsTypeResultTypeNvtType
  extends _ReportTypeReportTypeResultsTypeResultTypeNvtType {
  constructor: { new (): ReportTypeReportTypeResultsTypeResultTypeNvtType };
}

interface _ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsType
  extends BaseType {
  ref?: ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsTypeRefType[];
}
interface ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsType
  extends _ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsType {
  constructor: {
    new (): ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsType;
  };
}

interface _ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsTypeRefType
  extends Primitive._string {
  id?: string;
  type?: string;
}
interface ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsTypeRefType
  extends _ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsTypeRefType {
  constructor: {
    new (): ReportTypeReportTypeResultsTypeResultTypeNvtTypeRefsTypeRefType;
  };
}

interface _ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesType
  extends BaseType {
  score?: number;
  severity: ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesTypeSeverityType;
}
interface ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesType
  extends _ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesType {
  constructor: {
    new (): ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesType;
  };
}

interface _ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesTypeSeverityType
  extends BaseType {
  type?: string;
  date: Date;
  origin: string;
  score: number;
  value: string;
}
interface ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesTypeSeverityType
  extends _ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesTypeSeverityType {
  constructor: {
    new (): ReportTypeReportTypeResultsTypeResultTypeNvtTypeSeveritiesTypeSeverityType;
  };
}

interface _ReportTypeReportTypeResultsTypeResultTypeNvtTypeSolutionType
  extends Primitive._string {
  type?: string;
}
interface ReportTypeReportTypeResultsTypeResultTypeNvtTypeSolutionType
  extends _ReportTypeReportTypeResultsTypeResultTypeNvtTypeSolutionType {
  constructor: {
    new (): ReportTypeReportTypeResultsTypeResultTypeNvtTypeSolutionType;
  };
}

interface _ReportTypeReportTypeResultsTypeResultTypeOwnerType extends BaseType {
  name: string;
}
interface ReportTypeReportTypeResultsTypeResultTypeOwnerType
  extends _ReportTypeReportTypeResultsTypeResultTypeOwnerType {
  constructor: { new (): ReportTypeReportTypeResultsTypeResultTypeOwnerType };
}

interface _ReportTypeReportTypeResultsTypeResultTypeQodType extends BaseType {
  type: string;
  value: number;
}
interface ReportTypeReportTypeResultsTypeResultTypeQodType
  extends _ReportTypeReportTypeResultsTypeResultTypeQodType {
  constructor: { new (): ReportTypeReportTypeResultsTypeResultTypeQodType };
}

interface _ReportTypeReportTypeSeverityType extends BaseType {
  filtered: number;
  full: number;
}
interface ReportTypeReportTypeSeverityType
  extends _ReportTypeReportTypeSeverityType {
  constructor: { new (): ReportTypeReportTypeSeverityType };
}

interface _ReportTypeReportTypeSortType extends BaseType {
  field: ReportTypeReportTypeSortTypeFieldType;
}
interface ReportTypeReportTypeSortType extends _ReportTypeReportTypeSortType {
  constructor: { new (): ReportTypeReportTypeSortType };
}

interface _ReportTypeReportTypeSortTypeFieldType extends BaseType {
  order: string;
}
interface ReportTypeReportTypeSortTypeFieldType
  extends _ReportTypeReportTypeSortTypeFieldType {
  constructor: { new (): ReportTypeReportTypeSortTypeFieldType };
}

interface _ReportTypeReportTypeSsl_certsType extends BaseType {
  count: number;
}
interface ReportTypeReportTypeSsl_certsType
  extends _ReportTypeReportTypeSsl_certsType {
  constructor: { new (): ReportTypeReportTypeSsl_certsType };
}

interface _ReportTypeReportTypeTaskType extends BaseType {
  id: string;
  comment: string;
  name: string;
  progress: number;
  target: ReportTypeReportTypeTaskTypeTargetType;
}
interface ReportTypeReportTypeTaskType extends _ReportTypeReportTypeTaskType {
  constructor: { new (): ReportTypeReportTypeTaskType };
}

interface _ReportTypeReportTypeTaskTypeTargetType extends BaseType {
  id: string;
  comment: string;
  name: string;
  trash: number;
}
interface ReportTypeReportTypeTaskTypeTargetType
  extends _ReportTypeReportTypeTaskTypeTargetType {
  constructor: { new (): ReportTypeReportTypeTaskTypeTargetType };
}

interface _ReportTypeReportTypeVulnsType extends BaseType {
  count: number;
}
interface ReportTypeReportTypeVulnsType extends _ReportTypeReportTypeVulnsType {
  constructor: { new (): ReportTypeReportTypeVulnsType };
}

interface _ReportTypeTaskType extends BaseType {
  id: string;
  name: string;
}
interface ReportTypeTaskType extends _ReportTypeTaskType {
  constructor: { new (): ReportTypeTaskType };
}

export interface document extends BaseType {
  report: ReportType;
}
export var document: document;
declare function OpenVasParser(xml: string): OpenVas | null;
export { OpenVas };

