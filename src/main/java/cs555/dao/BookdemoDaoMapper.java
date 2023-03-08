package cs555.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface BookdemoDaoMapper {

    void insertBookdemo(@Param("bookdemo")Bookdemo bookdemo);
}
