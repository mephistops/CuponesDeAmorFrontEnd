import httpCommon from "../http-common";
import ICuponData from "../types/cupon.type";

class CuponDataService {
  getAll() {
    return httpCommon.get<Array<ICuponData>>("/coupon")
  }
}
export default new CuponDataService();