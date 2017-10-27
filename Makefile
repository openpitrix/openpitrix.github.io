# Copyright 2017 The OpenPitrix Authors. All rights reserved.
# Use of this source code is governed by a Apache license
# that can be found in the LICENSE file.

default:

caddy:
	docker run -d -p 80:80 -p 443:443 --restart=always -v /root/.caddy:/root/.caddy openpitrix/openpitrix.github.io
local:
	docker build -f Dockerfile.local -t openpitrix/openpitrix.github.io.local  --no-cache .
	docker run --rm -p 2015:2015 openpitrix/openpitrix.github.io.local
clean:
