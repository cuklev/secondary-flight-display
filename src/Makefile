CC=gcc
CFLAGS=-DDEBUG -MMD -MP
LDFLAGS=

BUILD_DIR=bin
TARGET=${BUILD_DIR}/listener

SRC_FILES=$(shell find -name \*.c)
OBJ_FILES=$(SRC_FILES:%=${BUILD_DIR}/%.o)
DEP_FILES=$(OBJ_FILES:%.o=%.d)

all: ${TARGET}
clean:
	rm -rf ${BUILD_DIR}

${BUILD_DIR}/%.c.o: %.c
	mkdir -p $(dir $@)
	${CC} -c ${CFLAGS} $< -o $@

${TARGET}: ${OBJ_FILES}
	${CC} ${LDFLAGS} $^ -o $@

-include ${DEP_FILES}

.PHONY: all, clean
