import { useMemo, useState } from "react";
import celoLogo from "../../images/celo.png";
import tonLogo from "../../images/ton logo.png";
import bnbLogo from "../../images/bnb.png";

type Token = {
  label: string;
  short: string;
  iconBg: string;
  iconText: string;
  logo?: string;
};

type Wallet = {
  label: string;
  iconBg: string;
  iconText: string;
};

export default function Checkout({ onNext }: { onNext?: () => void }) {
  const tokens: Token[] = useMemo(
    () => [
      {
        label: "USDT - CELO",
        short: "USDT",
        iconBg: "bg-[#f5f8d8]",
        iconText: "C",
        logo: celoLogo,
      },
      {
        label: "USDT - TON",
        short: "USDT",
        iconBg: "bg-[#e5f2ff]",
        iconText: "T",
        logo: tonLogo,
      },
      {
        label: "USDT - BNB",
        short: "USDT",
        iconBg: "bg-[#fff1d6]",
        iconText: "B",
        logo: bnbLogo,
      },
    ],
    []
  );

  const wallets: Wallet[] = useMemo(
    () => [
      { label: "Metamask", iconBg: "bg-[#ffe2c2]", iconText: "MM" },
      { label: "Rainbow", iconBg: "bg-gradient-to-br from-[#9df] to-[#f9d]", iconText: "RB" },
      { label: "WalletConnect", iconBg: "bg-[#ddecff]", iconText: "WC" },
      {
        label: "Other Crypto Wallets (Binance, Coinbase, Bybit etc)",
        iconBg: "bg-[#ece8ff]",
        iconText: "OW",
      },
    ],
    []
  );

  const [cryptoOption, setCryptoOption] = useState<Token>(tokens[0]);
  const [showCryptoMenu, setShowCryptoMenu] = useState(false);
  const [payFromOption, setPayFromOption] = useState<Wallet | null>(null);
  const [showWalletMenu, setShowWalletMenu] = useState(false);
  const [payTo, setPayTo] = useState("");
  const [amount] = useState("1.00");

  return (
    <div className="relative w-full max-w-[460px] rounded-[36px] bg-white px-6 py-7 shadow-[0_20px_80px_rgba(0,0,0,0.12)]">
      <div className="flex w-full items-center rounded-full bg-[#eef1f3] p-1 text-sm font-semibold text-[#879092]">
        <button className="flex-1 rounded-full bg-[#0d4034] px-4 py-2 text-white shadow-[0_8px_20px_rgba(13,64,52,0.35)]">
          Crypto to cash
        </button>
        <button className="flex-1 px-4 py-2">Cash to crypto</button>
        <button className="flex-1 px-4 py-2">Crypto to fiat loan</button>
      </div>

      <div className="mt-8 space-y-4">
        <div className="rounded-[28px] border border-[#e5e7eb] px-5 py-5 shadow-[inset_0_1px_0_rgba(0,0,0,0.02)]">
          <p className="text-sm font-medium text-[#8a9292]">You pay</p>
          <div className="mt-3 flex items-center justify-between gap-3">
            <span className="text-4xl font-semibold text-[#0f1d17]">{amount}</span>
            <div className="relative">
              <button
                className="flex items-center gap-2 rounded-full border border-[#e3e7ea] bg-white px-4 py-2 text-sm font-semibold text-[#0f1d17] shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                onClick={() => setShowCryptoMenu((open) => !open)}
              >
                {cryptoOption.logo ? (
                  <img src={cryptoOption.logo} alt={cryptoOption.short} className="h-6 w-6 rounded-full object-cover" />
                ) : (
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eef1f3] text-xs font-bold text-[#0f1d17]">
                    {cryptoOption.iconText}
                  </span>
                )}
                {cryptoOption.short}
                <span className="text-[#6d7577]">v</span>
              </button>

              {showCryptoMenu && (
                <div className="absolute left-1/2 top-[105%] z-50 w-64 -translate-x-1/2 rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
                  <div className="px-4 pb-2 pt-3">
                    <div className="flex items-center gap-2 rounded-full border border-[#e8eaec] px-3 py-2 text-sm text-[#7a8285]">
                      <span className="text-sm">🔍</span>
                      <span className="text-[#9aa0a3]">Search</span>
                    </div>
                  </div>
                  <div className="pb-3">
                    {tokens.map((token) => (
                      <button
                        key={token.label}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-semibold text-[#0f1d17] hover:bg-[#f4f5f6] ${
                          cryptoOption.label === token.label ? "bg-[#f5f6f7]" : ""
                        }`}
                        onClick={() => {
                          setCryptoOption(token);
                          setShowCryptoMenu(false);
                        }}
                      >
                        {token.logo ? (
                          <img src={token.logo} alt={token.short} className="h-10 w-10 rounded-full object-cover" />
                        ) : (
                          <span className={`flex h-10 w-10 items-center justify-center rounded-full text-base font-bold ${token.iconBg}`}>
                            {token.iconText}
                          </span>
                        )}
                        <span>{token.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#e5e7eb] px-5 py-5 shadow-[inset_0_1px_0_rgba(0,0,0,0.02)]">
          <p className="text-sm font-medium text-[#8a9292]">You receive</p>
          <span className="mt-3 inline-block text-4xl font-semibold text-[#0f1d17]">{amount}</span>
        </div>

        <div className="space-y-3">
          <p className="text-base font-semibold text-[#0f1d17]">Pay from</p>
          <div className="relative">
            <button
              className="flex w-full items-center justify-between rounded-full border border-[#e4e7ea] bg-white px-5 py-4 text-left text-base font-medium text-[#7b8486] shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
              onClick={() => setShowWalletMenu((open) => !open)}
            >
              <span>{payFromOption?.label || "Select an option"}</span>
              <span className="text-[#6d7577]">v</span>
            </button>

            {showWalletMenu && (
              <div className="absolute left-1/2 top-[102%] z-50 w-full -translate-x-1/2 rounded-3xl border border-[#e5e7eb] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
                <div className="divide-y divide-[#eef0f2]">
                  {wallets.map((wallet) => (
                    <button
                      key={wallet.label}
                      className="flex w-full items-center gap-3 px-5 py-4 text-left text-base font-semibold text-[#0f1d17] hover:bg-[#f5f6f7]"
                      onClick={() => {
                        setPayFromOption(wallet);
                        setShowWalletMenu(false);
                      }}
                    >
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full text-lg ${wallet.iconBg}`}>
                        {wallet.iconText}
                      </span>
                      <span>{wallet.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-base font-semibold text-[#0f1d17]">Pay to</p>
          <input
            className="w-full rounded-full border border-[#e4e7ea] bg-white px-5 py-4 text-base font-medium text-[#0f1d17] shadow-[0_4px_12px_rgba(0,0,0,0.05)] focus:border-[#0d4034] focus:outline-none"
            placeholder="Select an option"
            value={payTo}
            onChange={(e) => setPayTo(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!payFromOption || !payTo.trim()}
        className={`mt-8 w-full rounded-full px-5 py-4 text-base font-semibold text-white shadow-[0_12px_30px_rgba(13,64,52,0.35)] ${
          payFromOption && payTo.trim() ? "bg-[#0d4034]" : "bg-[#cfd4d6]"
        }`}
      >
        Continue
      </button>
    </div>
  );
}