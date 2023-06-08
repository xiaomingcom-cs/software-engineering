package cn.luischen.service.user;

import cn.luischen.model.UserDomain;

import java.util.List;
import org.springframework.stereotype.Service;
@Service
public interface UserService {

    /**
     * @Author: winterchen
     * @Description: 更改用户信息
     * @param user
     */
    int updateUserInfo(UserDomain user);

    /**
     * @Author: winterchen
     * @Description: 根据主键编号获取用户信息
     * @param uId 主键
     */
    UserDomain getUserInfoById(Integer uId);


    /**
     * 用户登录
     * @param username 用户名
     * @param password 密码
     * @return
     */
    UserDomain login(String username, String password);

}
