
function removeFalsy(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => Boolean(v)));
}

export function formatAddress(address) {
  if (!address) return;
  const temp = ['street_address', 'city', 'state', 'zip', 'country'].reduce(
    (acc, k) => ({ ...acc, [k]: (address)[k] }),
    {}
  );
  const formattedAddress = removeFalsy(temp);
  return Object.values(formattedAddress)?.map((item, index) => {
    return (
      <span className="single-address truncate" key={index}>
        {item}
      </span>
    );
  });
}





