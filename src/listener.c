#include "listener.h"

#include <sys/socket.h>
#include <netinet/ip.h>
#include <unistd.h>
#include <stdio.h>

#define BUFF_LEN 512

char msg[BUFF_LEN];

int listen_socket;
struct sockaddr_in sock_addr;

void listener_init(int port) {
	listen_socket = socket(AF_INET, SOCK_DGRAM, IPPROTO_UDP);

	sock_addr.sin_family = AF_INET;
	sock_addr.sin_addr.s_addr = htonl(INADDR_ANY);
	sock_addr.sin_port = htons(port);

	bind(listen_socket, (struct sockaddr*) &sock_addr, sizeof sock_addr);
}

void listener_quit(void) {
	close(listen_socket);
}

void listener_get(sensor_data* data) {
	recv(listen_socket, &msg, BUFF_LEN, 0);

#ifdef DEBUG
	printf("Msg: %s\n", msg);
#endif

	// airspeed | altitude | pitch | roll | slip | baroQFE | magneticCourse
	char c;
	int read = sscanf(msg, "%lf %c %lf %c %lf %c %lf %c %lf %c %lf %c %lf",
					&data->airspeed, &c,
					&data->altitude, &c,
					&data->pitch, &c,
					&data->roll, &c,
					&data->slip, &c,
					&data->baroQFE, &c,
					&data->magneticCourse);

#ifdef DEBUG
	printf("Parameters read: %d\n", read);
#endif
}

// Example: "25.000 | 45.154 | 15.000 | 0.000 | 0.054 | 1024 | 360"
