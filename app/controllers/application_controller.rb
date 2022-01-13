class ApplicationController < ActionController::API
    include ActionController::Cookies

  def hello_world
    session[:session_hello] ||= "World"
    cookies[:cookies_hello] ||= "World"
    render json: { session: session, cookies: cookies.to_hash }
    # session[:count] = (session[:count] || 0) + 1
    # render json: { count: session[:count] }
  end
end
