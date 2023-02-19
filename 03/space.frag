#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;
	float mousex = u_mouse.x / u_resolution.x;
	float mousey = u_mouse.y / u_resolution.y;
	float xx = st.x + mousex ;
	float yy = st.y + mousey ;
	gl_FragColor = vec4(xx,yy,0.0 + (abs(sin(u_time * 2.0))),1.0);
}
