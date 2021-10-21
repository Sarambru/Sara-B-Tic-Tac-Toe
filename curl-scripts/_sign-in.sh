
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-in" \
--include \
    --request POST \
    --body "credentials" \
    --header "" \
    --data '{

        "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'",
      }
    }
    }'

    echo
