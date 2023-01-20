import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import { memo } from 'react'

const Header = memo((props) => {
  const { sections, title, currentuser } = props;
  // 使用navigate导航附带状态跳转
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 10, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="black"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>

        {/* 根据登陆状态显示欢迎界面或者登录注册按钮 */}
        {currentuser ? (
          <div>喵呜！欢迎:{currentuser.username}
            <Link href="/blog" currentuser={null}>
              {/* 退出登录状态时清除state */}
              <Button variant="contained" onClick={() =>{
                 navigate("/login", { state: { currentuser: undefined } })
              }}>退 出</Button>
            </Link>
          </div>
        ) : (
          <Link href="/blog/login">
            <Button variant="contained">登 录</Button>
          </Link>
        )}

      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
})

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
