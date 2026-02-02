# Configuración de Caddy para Mica App

## Agregar a tu Caddyfile

```caddyfile
wcaceres.tplinkdns.com {
    # ... tus otras configuraciones existentes ...

    # Mica App - reverse proxy al contenedor
    handle_path /mica-app/* {
        reverse_proxy localhost:3001
    }

    # Redirect /mica-app to /mica-app/ (con trailing slash)
    redir /mica-app /mica-app/ permanent
}
```

## Alternativa si usas múltiples apps

Si ya tienes otras apps configuradas, solo agrega estas líneas dentro del bloque de tu dominio:

```caddyfile
    # Mica App
    handle_path /mica-app/* {
        reverse_proxy localhost:3001
    }
    redir /mica-app /mica-app/ permanent
```

## Después de modificar

```bash
# Recargar Caddy
sudo systemctl reload caddy

# O si usas Docker
docker exec -it caddy caddy reload --config /etc/caddy/Caddyfile
```

## Verificar

Accede a: `https://wcaceres.tplinkdns.com/mica-app/`

---

## Notas

- `handle_path` hace strip del prefix `/mica-app` antes de pasar al backend
- El contenedor Docker escucha en `localhost:3001`
- Caddy maneja automáticamente HTTPS con Let's Encrypt
