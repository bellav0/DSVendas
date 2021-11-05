function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a href="https://github.com/bellav0" target="_blank" rel="noreferrer">
            Isabella Vitoria
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Instagram:{" "}
            <a
              href="https://www.instagram.com/vitbellaz/"
              target="_blank"
              rel="noreferrer"
            >
              @vitbellaz
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
