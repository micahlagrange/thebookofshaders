#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


vec4 red(){
	return vec4(1.0, 0.0, 0.0, 1.0);
}
vec4 green(){
	return vec4(0.0, 1.0, 0.0, 1.0);
}
vec4 blue(){
	return vec4(0.0, 0.0, 1.0, 1.0);
}
vec4 white(){
	return vec4(1.0, 1.0, 1.0, 1.0);
}

float rand(vec2 co){
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}


void main() {
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
	float rando = rand( st );

	gl_FragColor = vec4(vec3(rando),1.0);

//	if ( mod(rando, 3.0) == 0.0 ) {
//		gl_FragColor = red();
//
//	} else if ( mod(rando, 3.0) == 1.0 ) {
///		gl_FragColor = green();
//
//	} else if ( mod(rando, 3.0) == 2.0 ) {
//		gl_FragColor = blue();
//
//	} else {
//		gl_FragColor = white();
//	}

}
