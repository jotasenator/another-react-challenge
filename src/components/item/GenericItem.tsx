import React, { useContext, useEffect, useState } from "react";
import { Picture } from "./Picture";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { QuantityContext } from "../../context/quantityContext";
import { TotalContext } from "../../context/totalContext";

interface Props {
  name: string;
  packInfo?: string[];
  packDetails?: string[];
  editRemove: boolean;
  remove: boolean;
  price: string;
}

export const GenericItem: React.FC<Props> = ({
  name,
  packInfo,
  packDetails,
  editRemove,
  remove,
  price,
}) => {
  const [deleteStyle, setDeleteStyle] = useState(false);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState("0");

  const [prevQuantity, setPrevQuantity] = useState("0");
  const [prevTotal, setPrevTotal] = useState(0);

  const { sumQuantity, setSumQuantity } = useContext(QuantityContext);
  const { sumTotal, setSumTotal } = useContext(TotalContext);

  const handleRemove = () => {
    setDeleteStyle(!deleteStyle);
  };

  const handleEditPack = () => {
    alert("Learn React.js if you want to Edit Pack :)");
  };

  const handleChangeQuantity = (e: { target: { value: string } }) => {
    e.target.value && +e.target.value >= 0 && setQuantity(e.target.value);
  };

  useEffect(() => {
    const totalCalculation = (+price * +quantity).toFixed(2);
    setTotal(+totalCalculation);

    setSumQuantity(
      (prevSumQuantity: number) => prevSumQuantity + (+quantity - +prevQuantity)
    );
    setSumTotal(
      (prevSumTotal: number) => prevSumTotal + (+totalCalculation - +prevTotal)
    );
    setPrevQuantity(quantity);
    setPrevTotal(+totalCalculation);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <>
      {
        <div
          className="genericItem"
          style={{ display: deleteStyle ? "none" : "flex" }}
        >
          <Picture />
          <div className="genericData">
            <div className="genericInfo">
              <h2>{name} </h2>
              <h3>
                {" "}
                Quantity:
                <input
                  className="ml-5"
                  type="number"
                  placeholder="0"
                  value={quantity}
                  onChange={handleChangeQuantity}
                />
              </h3>
              <ul>
                {packInfo?.map((x, index) => (
                  <li key={index}>
                    {x}{" "}
                    <span className="natural-gray">
                      {" "}
                      ({packDetails && packDetails[index]})
                    </span>
                  </li>
                ))}
              </ul>

              {editRemove ? (
                <div style={{ display: "flex" }}>
                  <button
                    className="editPackButton btn-generic"
                    onClick={handleEditPack}
                  >
                    Edit pack
                  </button>
                  <button
                    className="btn-generic"
                    onClick={handleRemove}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span>
                      <DeleteOutlineOutlinedIcon />
                    </span>{" "}
                    Remove
                  </button>
                </div>
              ) : (
                <button
                  className="btn-generic"
                  onClick={handleRemove}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>
                    <DeleteOutlineOutlinedIcon />
                  </span>{" "}
                  Remove
                </button>
              )}
            </div>

            <div className="priceResults">
              <h2> ${price} </h2>
              <h2>Total: ${total}</h2>
            </div>
            <div className="separator grayBackground"></div>
          </div>
        </div>
      }
    </>
  );
};
