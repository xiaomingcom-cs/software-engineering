package cn.luischen.dao;

import cn.luischen.model.LogDomain;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;


@Mapper
public interface LogDao {

    /**
     * 添加日志
     * @param logDomain
     * @return
     */
    int addLog(LogDomain logDomain);

    /**
     * 删除日志
     * @param id
     * @return
     */
    int deleteLogById(@Param("id") Integer id);

    /**
     * 获取日志
     * @return
     */
    List<LogDomain> getLogs();
}
