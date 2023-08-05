import { document } from "./openvas.d";
import { parseString } from "xml2js";
import { Convert, OpenVas } from './openvas-json';

const parseXml = (xml: string): OpenVas | null => {
  let scan: document | null = null;
  let openvas: OpenVas;
  parseString(xml, { mergeAttrs: true }, (err: Error | null, result: any) => {
    if (err) {
      return null;
    }
    scan = result;
  });
  openvas = Convert.toOpenVas(scan);
  return openvas;
};

const OpenVasParser = (xml: string): OpenVas | null => {
  const parsed = parseXml(xml);
  if (!parsed) {
    return null;
  }
  return parsed;
};

export default OpenVasParser;
