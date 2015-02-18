class PublicController < ApplicationController
	def index
		
	end

	def info_mail		
		Mailer.contactMail(params[:Nombre], params[:Correo], params[:Mensaje], params[:Ciudad]).deliver_now
		redirect_to root_path
		
	end


end