
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-in" \
--include \
    --request POST \
    --body "credentials" \
    --header "Content-Type: application/json" \
    --data '{

        "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'",
      }
    }
    }'

    echo
