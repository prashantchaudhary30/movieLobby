TO Register a New Movie
curl --location --request POST 'localhost:3000/api/v1/createMovie' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJwcmFzaGFudCIsIl9pZCI6IjM4OWFhMmIzLWM4MmUtNDBkYS05MjExLWI1OTJjMjIzM2ZhMyIsIm1vYmlsZSI6Ijk4NjY2NjIzMjMiLCJ1c2VyUm9sZSI6ImFkbWluIn0sImlhdCI6MTcwMTc4NDg0MX0.LcDTlszzntGODpzO48fNw4MhPdEMsTTrk-ZRMjFk6K4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title" : "Billboard",
    "genre" : ["Action","thriller"] ,
    "streamingLink" : "adfghgjhgfdsdadsfdgfhgjh" ,
    "ratings" : 8,
    "createdBy" : "389aa2b3-c82e-40da-9211-b592c2233fa3"
}'

Required Params : title,genre,streamingLink,ratings

Reponse : 
{
    "message": "movie created successfully",
    "status": 201,
    "data": {
        "_id": "3059d53d-aaf5-476f-b62b-fe754e271968",
        "title": "Billboard",
        "genre": [
            "Action",
            "thriller"
        ],
        "language": [],
        "cast": [],
        "streamingLink": "adfghgjhgfdsdadsfdgfhgjh",
        "ratings": 8,
        "createdBy": "389aa2b3-c82e-40da-9211-b592c2233fa3",
        "reviews": [],
        "_created_at": "2023-12-26T06:54:58.642Z",
        "_updated_at": "2023-12-26T06:54:58.642Z"
    }
}

To Create a User, he can be a user or admin 
curl --location --request POST 'localhost:3000/api/v1/user/createUser' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name" : "prashant",
    "mobile" :"9866662323",
    "email":"k@g.com",
    "userRole":"admin"
}'

Required Params : name,mobile,email 
userRole : default 'user'

Response //Not using refresh token saving it db so after login get the old token again 
{
    "message": "user already exists",
    "status": 200,
    "data": {
        "_id": "389aa2b3-c82e-40da-9211-b592c2233fa3",
        "name": "prashant",
        "mobile": "9866662323",
        "email": "k@g.com",
        "userRole": "admin",
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJwcmFzaGFudCIsIl9pZCI6IjM4OWFhMmIzLWM4MmUtNDBkYS05MjExLWI1OTJjMjIzM2ZhMyIsIm1vYmlsZSI6Ijk4NjY2NjIzMjMiLCJ1c2VyUm9sZSI6ImFkbWluIn0sImlhdCI6MTcwMTc4NDg0MX0.LcDTlszzntGODpzO48fNw4MhPdEMsTTrk-ZRMjFk6K4",
        "_created_at": "2023-12-05T14:00:41.073Z",
        "_updated_at": "2023-12-05T14:00:41.073Z"
    }
}


Get All Movies 

curl --location --request GET 'localhost:3000/api/v1/movie?pageNumber=1&pageLimit=2' //added pagination 

{
    "message": "data fetch successfully",
    "status": 200,
    "data": [
        {
            "_id": "9190c91d-bda3-4b57-89e3-40b666bcfcc6",
            "title": "Animal",
            "genre": [
                "Action",
                "thriller"
            ],
            "cast": [],
            "language": [],
            "streamingLink": "adfghgjhgfdsdadsfdgfhgjh",
            "ratings": 8,
            "createdBy": "389aa2b3-c82e-40da-9211-b592c2233fa3",
            "reviews": [],
            "_created_at": "2023-12-06T05:56:02.103Z",
            "_updated_at": "2023-12-06T05:56:02.103Z"
        },
        {
            "_id": "8ed5c7ff-1db1-4303-9cba-9a82b295c44f",
            "title": "Sam",
            "genre": [
                "Action",
                "thriller"
            ],
            "cast": [],
            "language": [],
            "streamingLink": "adfghgjhgfdsdadsfdgfhgjh",
            "ratings": 8,
            "createdBy": "389aa2b3-c82e-40da-9211-b592c2233fa3",
            "reviews": [],
            "_created_at": "2023-12-06T06:53:47.010Z",
            "_updated_at": "2023-12-06T06:53:47.010Z"
        }
    ]
}



Get Movie using Genre or title
curl --location --request GET 'http://localhost:3000/api/v1/search?genre=Action'
curl --location --request GET 'http://localhost:3000/api/v1/search?genre=Action&title=Billboard'

{
    "message": "data fetch successfully",
    "status": 200,
    "data": [
        {
            "_id": "8b8a52e5-1624-4310-968d-42e9bc617771",
            "title": "Billboard",
            "genre": [
                "Action",
                "thriller"
            ],
            "cast": [],
            "language": [],
            "streamingLink": "adfghgjhgfdsdadsfdgfhgjh",
            "ratings": 8,
            "createdBy": "389aa2b3-c82e-40da-9211-b592c2233fa3",
            "reviews": [],
            "_created_at": "2023-12-06T06:53:55.257Z",
            "_updated_at": "2023-12-06T06:53:55.257Z"
        },
        {
            "_id": "3059d53d-aaf5-476f-b62b-fe754e271968",
            "title": "Billboard",
            "genre": [
                "Action",
                "thriller"
            ],
            "language": [],
            "cast": [],
            "streamingLink": "adfghgjhgfdsdadsfdgfhgjh",
            "ratings": 8,
            "createdBy": "389aa2b3-c82e-40da-9211-b592c2233fa3",
            "reviews": [],
            "_created_at": "2023-12-26T06:54:58.642Z",
            "_updated_at": "2023-12-26T06:54:58.642Z"
        }
    ]
}


To Delete a movie

curl --location --request DELETE 'localhost:3000/api/v1/movies/51d68062-0d79-432c-859e-bf9bcf871398' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJwcmFzaGFudCIsIl9pZCI6IjM4OWFhMmIzLWM4MmUtNDBkYS05MjExLWI1OTJjMjIzM2ZhMyIsIm1vYmlsZSI6Ijk4NjY2NjIzMjMiLCJ1c2VyUm9sZSI6ImFkbWluIn0sImlhdCI6MTcwMTc4NDg0MX0.LcDTlszzntGODpzO48fNw4MhPdEMsTTrk-ZRMjFk6K4'

Response
{
    "message": "Movie Deleted",
    "status": 200,
    "data": null
}


To Update Movie details 

curl --location --request PUT 'localhost:3000/api/v1/movies/9190c91d-bda3-4b57-89e3-40b666bcfcc6' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJwcmFzaGFudCIsIl9pZCI6IjM4OWFhMmIzLWM4MmUtNDBkYS05MjExLWI1OTJjMjIzM2ZhMyIsIm1vYmlsZSI6Ijk4NjY2NjIzMjMiLCJ1c2VyUm9sZSI6ImFkbWluIn0sImlhdCI6MTcwMTc4NDg0MX0.LcDTlszzntGODpzO48fNw4MhPdEMsTTrk-ZRMjFk6K4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title" : "Animal 5"
}'

{
    "message": "Movie detail updated successfully",
    "status": 200,
    "data": null
}

