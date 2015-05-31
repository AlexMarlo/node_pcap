function UCARP() {
    this.version = null;
    this.type = null;
    this.vhostId = null;
    this.advSkew = null;
    this.authLen = null;
    this.reserved = null;
    this.advBase = null;
    this.checksum = null;
    this.counter1 = null;
    this.counter2 = null;
    this.sha1HMAC1 = null;
    this.sha1HMAC2 = null;
    this.sha1HMAC3 = null;
    this.sha1HMAC4 = null;
    this.sha1HMAC5 = null;
    this.vaddr = null;
}

UCARP.prototype.decode = function (raw_packet, offset) {
    var orig_offset = offset;

    this.version = raw_packet[offset];
    this.type = raw_packet[offset+1];
    this.vaddr = [raw_packet[offset+36], raw_packet[offset+37],raw_packet[offset+38],raw_packet[offset+39]];
    return this;
};

module.exports = UCARP;
