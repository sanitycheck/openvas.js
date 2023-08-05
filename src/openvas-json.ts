// To parse this data:
//
//   import { Convert, OpenVas } from "./file";
//
//   const openVas = Convert.toOpenVas(json);

export interface OpenVas {
  report: OpenVasReport;
}

export interface OpenVasReport {
  extension: string[];
  id: string[];
  format_id: string[];
  content_type: string[];
  owner: Owner[];
  name: Date[];
  comment: string[];
  creation_time: Date[];
  modification_time: Date[];
  writable: string[];
  in_use: string[];
  task: ReportFormat[];
  report_format: ReportFormat[];
  report: ReportElement[];
}

export interface Owner {
  name: string[];
}

export interface ReportElement {
  id: string[];
  gmp: Gmp[];
  sort: Sort[];
  filters: Filter[];
  scan_run_status: string[];
  hosts: App[];
  closed_cves: App[];
  vulns: App[];
  os: App[];
  apps: App[];
  ssl_certs: App[];
  task: Task[];
  timestamp: Date[];
  scan_start: Date[];
  timezone: string[];
  timezone_abbrev: string[];
  ports: ReportPort[];
  results: ReportResult[];
  result_count: ReportResultCount[];
  severity: FalsePositiveElement[];
  host: ReportHost[];
  scan_end: Date[];
  errors: ReportError[];
  report_format: string[];
}

export interface App {
  count: string[];
}

export interface ReportError {
  count: string[];
  error: ErrorError[];
}

export interface ErrorError {
  host: ErrorHost[];
  port: string[];
  description: string[];
  nvt: ErrorNvt[];
  scan_nvt_version: Date[];
  severity: string[];
}

export interface ErrorHost {
  _: string;
  asset: Asset[];
}

export interface Asset {
  asset_id: string[];
}

export interface ErrorNvt {
  oid: string[];
  type: string[];
  name: string[];
  cvss_base: string[];
}

export interface Filter {
  id: string[];
  term: string[];
  filter: string[];
  keywords: FilterKeyword[];
}

export interface FilterKeyword {
  keyword: KeywordKeyword[];
}

export interface KeywordKeyword {
  column: string[];
  relation: string[];
  value: string[];
}

export interface Gmp {
  version: string[];
}

export interface ReportHost {
  ip: string[];
  asset: Asset[];
  start: Date[];
  end: Date[];
  port_count: PortCount[];
  result_count: HostResultCount[];
  detail: Detail[];
}

export interface Detail {
  name: string[];
  value: string[];
  source: Source[];
  extra: string[];
}

export interface Source {
  type: string[];
  name: string[];
  description: string[];
}

export interface PortCount {
  page: string[];
}

export interface HostResultCount {
  page: string[];
  hole: PortCount[];
  warning: PortCount[];
  info: PortCount[];
  log: PortCount[];
  false_positive: PortCount[];
}

export interface ReportPort {
  max: string[];
  start: string[];
  count: string[];
  port: PortPort[];
}

export interface PortPort {
  _: string;
  host: string[];
  severity: string[];
  threat: string[];
}

export interface ReportResultCount {
  _: string;
  full: string[];
  filtered: string[];
  hole: FalsePositiveElement[];
  info: FalsePositiveElement[];
  log: FalsePositiveElement[];
  warning: FalsePositiveElement[];
  false_positive: FalsePositiveElement[];
}

export interface FalsePositiveElement {
  full: string[];
  filtered: string[];
}

export interface ReportResult {
  max: string[];
  start: string[];
  result: ResultResult[];
}

export interface ResultResult {
  id: string[];
  name: string[];
  owner: Owner[];
  modification_time: Date[];
  comment: string[];
  creation_time: Date[];
  host: ResultHost[];
  port: string[];
  nvt: ResultNvt[];
  scan_nvt_version: Date[];
  threat: string[];
  severity: string[];
  qod: Qod[];
  description: string[];
  original_threat: string[];
  original_severity: string[];
}

export interface ResultHost {
  _: string;
  asset: Asset[];
  hostname: string[];
}

export interface ResultNvt {
  oid: string[];
  type: string[];
  name: string[];
  family: string[];
  cvss_base: string[];
  severities: NvtSeverity[];
  tags: string[];
  solution: Solution[];
  refs?: NvtRef[];
}

export interface NvtRef {
  ref: RefRef[];
}

export interface RefRef {
  type: string[];
  id: string[];
}

export interface NvtSeverity {
  score: string[];
  severity: SeveritySeverity[];
}

export interface SeveritySeverity {
  type: string[];
  origin: string[];
  date: Date[];
  score: string[];
  value: string[];
}

export interface Solution {
  _: string;
  type: string[];
}

export interface Qod {
  value: string[];
  type: string[];
}

export interface Sort {
  field: Field[];
}

export interface Field {
  _: string;
  order: string[];
}

export interface Task {
  id: string[];
  name: string[];
  comment: string[];
  target: Target[];
  progress: string[];
}

export interface Target {
  id: string[];
  trash: string[];
  name: string[];
  comment: string[];
}

export interface ReportFormat {
  id: string[];
  name: string[];
}

// Converts JSON types to/from your types
export class Convert {
  public static toOpenVas(json: any): OpenVas {
    return json;
  }

  public static openVasToJson(value: OpenVas): any {
    return value;
  }

  public static toOpenVasReport(json: any): OpenVasReport {
    return json;
  }

  public static openVasReportToJson(value: OpenVasReport): any {
    return value;
  }

  public static toOwner(json: any): Owner {
    return json;
  }

  public static ownerToJson(value: Owner): any {
    return value;
  }

  public static toReportElement(json: any): ReportElement {
    return json;
  }

  public static reportElementToJson(value: ReportElement): any {
    return value;
  }

  public static toApp(json: any): App {
    return json;
  }

  public static appToJson(value: App): any {
    return value;
  }

  public static toReportError(json: any): ReportError {
    return json;
  }

  public static reportErrorToJson(value: ReportError): any {
    return value;
  }

  public static toErrorError(json: any): ErrorError {
    return json;
  }

  public static errorErrorToJson(value: ErrorError): any {
    return value;
  }

  public static toErrorHost(json: any): ErrorHost {
    return json;
  }

  public static errorHostToJson(value: ErrorHost): any {
    return value;
  }

  public static toAsset(json: any): Asset {
    return json;
  }

  public static assetToJson(value: Asset): any {
    return value;
  }

  public static toErrorNvt(json: any): ErrorNvt {
    return json;
  }

  public static errorNvtToJson(value: ErrorNvt): any {
    return value;
  }

  public static toFilter(json: any): Filter {
    return json;
  }

  public static filterToJson(value: Filter): any {
    return value;
  }

  public static toFilterKeyword(json: any): FilterKeyword {
    return json;
  }

  public static filterKeywordToJson(value: FilterKeyword): any {
    return value;
  }

  public static toKeywordKeyword(json: any): KeywordKeyword {
    return json;
  }

  public static keywordKeywordToJson(value: KeywordKeyword): any {
    return value;
  }

  public static toGmp(json: any): Gmp {
    return json;
  }

  public static gmpToJson(value: Gmp): any {
    return value;
  }

  public static toReportHost(json: any): ReportHost {
    return json;
  }

  public static reportHostToJson(value: ReportHost): any {
    return value;
  }

  public static toDetail(json: any): Detail {
    return json;
  }

  public static detailToJson(value: Detail): any {
    return value;
  }

  public static toSource(json: any): Source {
    return json;
  }

  public static sourceToJson(value: Source): any {
    return value;
  }

  public static toPortCount(json: any): PortCount {
    return json;
  }

  public static portCountToJson(value: PortCount): any {
    return value;
  }

  public static toHostResultCount(json: any): HostResultCount {
    return json;
  }

  public static hostResultCountToJson(value: HostResultCount): any {
    return value;
  }

  public static toReportPort(json: any): ReportPort {
    return json;
  }

  public static reportPortToJson(value: ReportPort): any {
    return value;
  }

  public static toPortPort(json: any): PortPort {
    return json;
  }

  public static portPortToJson(value: PortPort): any {
    return value;
  }

  public static toReportResultCount(json: any): ReportResultCount {
    return json;
  }

  public static reportResultCountToJson(value: ReportResultCount): any {
    return value;
  }

  public static toFalsePositiveElement(json: any): FalsePositiveElement {
    return json;
  }

  public static falsePositiveElementToJson(value: FalsePositiveElement): any {
    return value;
  }

  public static toReportResult(json: any): ReportResult {
    return json;
  }

  public static reportResultToJson(value: ReportResult): any {
    return value;
  }

  public static toResultResult(json: any): ResultResult {
    return json;
  }

  public static resultResultToJson(value: ResultResult): any {
    return value;
  }

  public static toResultHost(json: any): ResultHost {
    return json;
  }

  public static resultHostToJson(value: ResultHost): any {
    return value;
  }

  public static toResultNvt(json: any): ResultNvt {
    return json;
  }

  public static resultNvtToJson(value: ResultNvt): any {
    return value;
  }

  public static toNvtRef(json: any): NvtRef {
    return json;
  }

  public static nvtRefToJson(value: NvtRef): any {
    return value;
  }

  public static toRefRef(json: any): RefRef {
    return json;
  }

  public static refRefToJson(value: RefRef): any {
    return value;
  }

  public static toNvtSeverity(json: any): NvtSeverity {
    return json;
  }

  public static nvtSeverityToJson(value: NvtSeverity): any {
    return value;
  }

  public static toSeveritySeverity(json: any): SeveritySeverity {
    return json;
  }

  public static severitySeverityToJson(value: SeveritySeverity): any {
    return value;
  }

  public static toSolution(json: any): Solution {
    return json;
  }

  public static solutionToJson(value: Solution): any {
    return value;
  }

  public static toQod(json: any): Qod {
    return json;
  }

  public static qodToJson(value: Qod): any {
    return value;
  }

  public static toSort(json: any): Sort {
    return json;
  }

  public static sortToJson(value: Sort): any {
    return value;
  }

  public static toField(json: any): Field {
    return json;
  }

  public static fieldToJson(value: Field): any {
    return value;
  }

  public static toTask(json: any): Task {
    return json;
  }

  public static taskToJson(value: Task): any {
    return value;
  }

  public static toTarget(json: any): Target {
    return json;
  }

  public static targetToJson(value: Target): any {
    return value;
  }

  public static toReportFormat(json: any): ReportFormat {
    return json;
  }

  public static reportFormatToJson(value: ReportFormat): any {
    return value;
  }
}
