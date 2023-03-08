package cs555.dao;

import cs555.bean.Bookdemo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface BookdemoDaoMapper {

    void insertBookdemo(@Param("bookdemo")Bookdemo bookdemo);
}
