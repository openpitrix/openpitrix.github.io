FROM openpitrix/caddy
COPY Caddyfile /etc/Caddyfile
COPY Caddyfile.local /etc/Caddyfile.local

VOLUME /root/.caddy
WORKDIR /srv


ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]
