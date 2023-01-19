import { QRCodeSVG } from "qrcode.react";

type Props = {
  code: number;
  description: string;
  text: string;
  iconOne: string;
  iconTwo: string;
};

export function Cupon({ code, description, text, iconOne, iconTwo }: Props) {
  return (
    <div className="col-md-6 col-sm-12 p-2 my-3">
      <div className="row p-3 fw-bold text-center">
        <div className="col-2 offset-1 p-2 rounded-start-4 border border-2 border-end-0 border-secondary">
          <QRCodeSVG value={code} style={{width: "80%"}} />
        </div>
        <div className="col-6 fs-5 border border-2 border-secondary">
          <div className="row mt-3">
            <div className="col-12">REDIMIR POR</div>
          </div>
          <div className="row">
            <div className="col-1 offset-1">
              <i class="bi bi-heart-fill text-danger"></i>
            </div>
            <div className="col-8 fs-3 text-center">{text}</div>
            <div className="col-1">
              <i class="bi bi-heart-fill text-danger"></i>
            </div>
            <div className="col-12">
              <h5>{description}</h5>
            </div>
          </div>
        </div>
        <div className="col-2 fs-1 rounded-end-4 border border-start-0 border-2 border-secondary">
          <i className={iconOne}></i><br/>
          <i className={iconTwo}></i>          
        </div>
      </div>
    </div>
  );
}
