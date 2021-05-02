import json

import pytest

from app.api import crud


def test_create_news(test_app, monkeypatch):
    test_request_payload = {"headline": "something", "body": "something else"}
    test_response_payload = {"id": 1, "headline": "something", "body": "something else"}

    async def mock_post(payload):
        return 1

    monkeypatch.setattr(crud, "post", mock_post)

    response = test_app.post("/newsfeed/", data=json.dumps(test_request_payload),)

    assert response.status_code == 201
    assert response.json() == test_response_payload


def test_create_news_invalid_json(test_app):
    response = test_app.post("/newsfeed/", data=json.dumps({"headline": "something"}))
    assert response.status_code == 422

    response = test_app.post("/newsfeed/", data=json.dumps({"headline": "1", "body": "2"}))
    assert response.status_code == 422
    

def test_read_newsfeed(test_app, monkeypatch):
    test_data = {"id": 1, "headline": "something", "body": "something else"}

    async def mock_get(id):
        return test_data

    monkeypatch.setattr(crud, "get", mock_get)

    response = test_app.get("/newsfeed/1")
    assert response.status_code == 200
    assert response.json() == test_data


def test_read_newsfeed_incorrect_id(test_app, monkeypatch):
    async def mock_get(id):
        return None

    monkeypatch.setattr(crud, "get", mock_get)

    response = test_app.get("/newsfeed/9999999")
    assert response.status_code == 404
    assert response.json()["detail"] == "News item not found"

    response = test_app.get("/newsfeed/0")
    assert response.status_code == 422


def test_read_all_news(test_app, monkeypatch):
    test_data = [
        {"headline": "something", "body": "something else", "id": 1},
        {"headline": "someone", "body": "someone else", "id": 2},
    ]

    async def mock_get_all():
        return test_data

    monkeypatch.setattr(crud, "get_all", mock_get_all)

    response = test_app.get("/newsfeed/")
    assert response.status_code == 200
    assert response.json() == test_data


def test_update_newsfeed(test_app, monkeypatch):
    test_update_data = {"headline": "someone", "body": "someone else", "id": 1}

    async def mock_get(id):
        return True

    monkeypatch.setattr(crud, "get", mock_get)

    async def mock_put(id, payload):
        return 1

    monkeypatch.setattr(crud, "put", mock_put)

    response = test_app.put("/newsfeed/1/", data=json.dumps(test_update_data))
    assert response.status_code == 200
    assert response.json() == test_update_data


@pytest.mark.parametrize(
    "id, payload, status_code",
    [
        [1, {}, 422],
        [1, {"body": "bar"}, 422],
        [999, {"headline": "foo", "body": "bar"}, 404],
        [1, {"title": "1", "description": "bar"}, 422],
        [1, {"title": "foo", "description": "1"}, 422],
        [0, {"title": "foo", "description": "bar"}, 422],
    ],
)
def test_update_newsfeed_invalid(test_app, monkeypatch, id, payload, status_code):
    async def mock_get(id):
        return None

    monkeypatch.setattr(crud, "get", mock_get)

    response = test_app.put(f"/newsfeed/{id}/", data=json.dumps(payload),)
    assert response.status_code == status_code


def test_remove_newsfeed(test_app, monkeypatch):
    test_data = {"headline": "something", "body": "something else", "id": 1}

    async def mock_get(id):
        return test_data

    monkeypatch.setattr(crud, "get", mock_get)

    async def mock_delete(id):
        return id

    monkeypatch.setattr(crud, "delete", mock_delete)

    response = test_app.delete("/newsfeed/1/")
    assert response.status_code == 200
    assert response.json() == test_data


def test_remove_newsfeed_incorrect_id(test_app, monkeypatch):
    async def mock_get(id):
        return None

    monkeypatch.setattr(crud, "get", mock_get)

    response = test_app.delete("/newsfeed/9999999/")
    assert response.status_code == 404
    assert response.json()["detail"] == "News item not found"

    response = test_app.delete("/newsfeed/0/")
    assert response.status_code == 422
