# Photo School

## Contributing

To start the project locally, you need to run both PocketBase backend as well as Svelte Frontend

### Start PocketBase
```bash
$ go run main.go serve
```
---
### Start SvelteKit
> Before running SvelteKit, make sure to create a .env file in the frontend folder with the following properties
> 
> - PUBLIC_PB_BASE_URL => URL to PocketBase backend

```bash
$ pnpm --dir ./frontend install
$ pnpm --dir ./frontend run dev
```

### Create migration

After changing a model in PocketBase admin panel, create a new migration with the following command
```bash
$ go run main.go migrate collections
```
