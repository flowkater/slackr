const publicKey = () => {
  if(window.__webpack_env === 'production') {
    return '03e6f7f14147c53c716e';
  }
  else {
    return '1d163b2919d9a30d98db';
  }
}

export default publicKey;
