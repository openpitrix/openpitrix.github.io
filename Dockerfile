FROM openpitrix/caddy
COPY Caddyfile /etc/Caddyfile

VOLUME /root/.caddy
WORKDIR /srv


ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout"]
