import React from "react";

const Page404 = () => {
  return (
    <div>
      <div>
        <p>
          404
        </p>
        <p >
          Sayfa Bulunamadı
        </p>
        <p >
          Üzgünüz, aradığınız sayfa bulunamadı.
        </p>
        <a
          href="/"
          title="Return Home"
        >
          <span>Anasayfaya Dön</span>
        </a>
      </div>
    </div>
  );
};

export default Page404;