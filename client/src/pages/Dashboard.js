import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [wallet, setWallet] = useState({});
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/wallet/${userId}`)
      .then(res => setWallet(res.data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Pharex Wallet</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div>USD: ${wallet.USD}</div>
        <div>NGN: ₦{wallet.NGN}</div>
        <div>EUR: €{wallet.EUR}</div>
      </div>
    </div>
  );
}
