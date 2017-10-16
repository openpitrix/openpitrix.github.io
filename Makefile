default:

run:
	docker run --rm -it -p 2015:2015 -v `pwd`/Caddyfile:/etc/Caddyfile chai2010/caddy-docker

clean:
