curl "https://tic-tac-toe-api-production.herokuapp.com/sign-up" \
    --include \
    --request POST \
    --body "credentials" \
    --header "" \
    --data '{

        "credentials": {
        "email": "an example email address",
        "password": "an example password",
        "password_confirmation": "an example password"
      }
    }'

    echo
