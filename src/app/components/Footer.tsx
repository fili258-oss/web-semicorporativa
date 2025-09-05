const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-primary-50 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developers. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          Implementado con el ❤️ por <a href="#" target="__blank" className="text-primary-700 hover:underline">Developers</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;