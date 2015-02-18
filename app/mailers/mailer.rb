class Mailer < ActionMailer::Base
  default from: "pinelo93@gmail.com"

  def contactMail(nombre, correo, mensaje, ciudad)
  	@ciudad = ciudad
    @nombre = nombre
    @correo = correo
    @mensaje = mensaje
    mail(to: "pinelo93@gmail.com", subject: "Correo enviado por la pagina web.")
    
  end
end
