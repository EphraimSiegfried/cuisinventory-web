export default function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("deviceId");
    window.location.reload(false);
  };
  return (
    <button
      onClick={handleLogout}
      className="btn btn-ghost btn-xs sm:btn-sm md:btn-md "
    >
      Logout
    </button>
  );
}
