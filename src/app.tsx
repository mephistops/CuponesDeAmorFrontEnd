import { Cupon } from "./components/cupon";
import cuponesService from "./services/cupones.service";
import { useState, useEffect } from "preact/hooks";
import ICuponData from "./types/cupon.type";

export function App() {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    cuponesService.getAll().then((response: any) => {
      setCoupons(response.data);
    });
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <p className="h2 fw-bold">Cupones de Amor</p>
        </div>
      </div>

      <div className="row">
        {coupons && coupons.map((coupon) => {
            return (
              <Cupon
                code={coupon['id']}
                text={coupon['text']}
                description={coupon['description']}
                iconOne={coupon['iconOne']}
                iconTwo={coupon['iconTwo']}
              />
            );
          })}
      </div>
    </>
  );
}
