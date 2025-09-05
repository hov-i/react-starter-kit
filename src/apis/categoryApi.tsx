import fetch from "@/apis/fetch";

export default {
  getCtgoPlaceInfoList(params: Record<string, unknown>) {
    return fetch.get("/", params);
  },
};
