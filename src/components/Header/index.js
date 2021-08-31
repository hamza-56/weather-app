import { SearchIcon, Logo } from 'icons';
import { Link } from 'react-router-dom';

const Header = ({ handleSearch }) => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container-fluid">
			<Link className="navbar-brand" to="/">
				<Logo />
			</Link>
			<div
				className="navbar-collapse justify-content-center"
				id="navbarSupportedContent"
			>
				<form onSubmit={handleSearch} className="d-flex w-50 m-auto">
					<input
						className="form-control"
						type="search"
						placeholder="Search"
						name="searchtext"
						aria-label="Search"
					/>
					<button className="btn btn-light" type="submit">
						<SearchIcon />
					</button>
				</form>
			</div>
		</div>
	</nav>
);

export default Header;
