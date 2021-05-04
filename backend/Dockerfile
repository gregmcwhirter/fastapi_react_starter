# pull official base image
FROM python:3.9.4-slim-buster

# create & set work directory
RUN mkdir /app
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# copy requirements file
COPY ./requirements.txt /app/requirements.txt

# install system dependencies
RUN set -ex \
  && apt update \
  && apt install -y netcat gcc postgresql-client \
  && apt clean \
  && pip install --upgrade pip setuptools wheel \
  && pip install -r /app/requirements.txt \
  && rm -rf /root/.cache/pip

# copy project
COPY . /app