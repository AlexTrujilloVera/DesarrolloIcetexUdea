import index from "./index";
function index(){
   return ( 
   <>
   <index></index>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="index.html">Inicio</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
		 <div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" href="quiensoy.html">¿Quién Soy?</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="registro.html">Registro</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="contacto.html">Contacto</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="login.html">Login</a>
					</li>
					<li class="nav-item">
						<a class="nav-link active" href="home.html">🛍️Mis Compras🛒</a>
					</li>
					</ul>
						<form class="d-flex" role="search">
							<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
							<button class="btn btn-outline-success" type="submit">Buscar</button>
						</form>
		     </div>
		</div>
	</nav>
	
	<div class="container text-center">
		<hr>
		<nav>
			<h1>Bienvenidos Soy Alex Trujillo Vera</h1>
			<h2>Programador Web Con Mas De 3 Años De Experiencia En El Maquetado Web </h2>
		</nav>
		</hr>
	</div>
	<hr></hr>
	<div class="container text-center">
		<div class="row">
			<div class="col-sm-6">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Venta De Hosting Y Dominios</h5>
						<p class="card-text"> ¿Quieres tener tu propio sitio web profesional,rápido y seguro? Con nuestro
							servicio de dominio y hosting,
							puedes conseguirlo en solo unos minutos. Te ofrecemos los mejores planes de alojamiento web,
							con espacio ilimitado,
							ancho de banda ilimitado,certificado SSL gratis, soporte técnico 24/7 y mucho más.
							¡Aprovecha nuestra oferta especial y
							obtén un 50% de descuento en tu primer año! Visita nuestra página web para más información.
						</p>
						<a href="registro.html" class="btn btn-primary">Adquirir</a>
					</div>
				</div>
			</div>
			<div class="col-sm-6">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Creación De Páginas Web</h5>
						<p class="card-text">¿Te gustaría tener una página web única, atractiva y funcional? Con nuestro
							servicio de creación de páginas
							web, puedes lograrlo sin complicaciones. Te ofrecemos un diseño personalizado, adaptado a
							tus necesidades y preferencias.
							Contamos con un equipo de profesionales expertos en desarrollo web, que te asesorarán y
							acompañarán en todo el proceso, para que puedas alcanzar tus objetivos online.
						!animate y adquiere tus servicios y no pierdas la oportunidad de crecer</p>
						<a href="registro.html" class="btn btn-primary">Cotizar</a>
					</div>
				</div>
			</div>
			<div class="col-sm-12">
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Posicionamiento WEB</h5>
						<p class="card-text">Es una herramienta clave para aumentar
							la visibilidad de tu negocio en Internet y atraer a más clientes potenciales. Consiste en
							optimizar tu página web para que aparezca en los primeros resultados de los buscadores
							cuando los usuarios buscan palabras relacionadas con tu sector o actividad. De esta forma,
							puedes generar más tráfico, más conversiones y más ventas. Para vender el servicio de
							posicionamiento web, debes enfocarte en los beneficios que puede aportar a tus clientes,
							como mejorar su reputación online, aumentar su competitividad, reducir sus costes de
							publicidad y fidelizar a sus clientes.</p>
						<a href="registro.html" class="btn btn-primary">Quiero Más información</a>
					</div>
				</div>
			</div>
		</div>
	</div>
   </>
    );
}                    
export default Home;
