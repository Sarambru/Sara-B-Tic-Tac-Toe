curl "https://tic-tac-toe-api-production.herokuapp.com/sign-up" \
    --include \
    --request POST \
    --header "Content-Type: application/json" \
    --data '{

        "credentials": {
        "email": "'"${EMAIL}"'",
        "password": "'"${PASSWORD}"'"
        "passwordConfirm": "'"${PASSWORD}"'"
      }
    }'

    echo
