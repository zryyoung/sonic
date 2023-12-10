// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.
// Code generated by gorm.io/gen. DO NOT EDIT.

package dal

import (
	"context"

	"gorm.io/gen"
	"gorm.io/gen/field"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
	"gorm.io/gorm/schema"
	"gorm.io/plugin/dbresolver"

	"github.com/go-sonic/sonic/model/entity"
)

func newComment(db *gorm.DB, opts ...gen.DOOption) comment {
	_comment := comment{}

	_comment.commentDo.UseDB(db, opts...)
	_comment.commentDo.UseModel(&entity.Comment{})

	tableName := _comment.commentDo.TableName()
	_comment.ALL = field.NewAsterisk(tableName)
	_comment.ID = field.NewInt32(tableName, "id")
	_comment.Type = field.NewField(tableName, "type")
	_comment.CreateTime = field.NewTime(tableName, "create_time")
	_comment.UpdateTime = field.NewTime(tableName, "update_time")
	_comment.AllowNotification = field.NewBool(tableName, "allow_notification")
	_comment.Author = field.NewString(tableName, "author")
	_comment.AuthorURL = field.NewString(tableName, "author_url")
	_comment.Content = field.NewString(tableName, "content")
	_comment.Email = field.NewString(tableName, "email")
	_comment.GravatarMd5 = field.NewString(tableName, "gravatar_md5")
	_comment.IPAddress = field.NewString(tableName, "ip_address")
	_comment.IsAdmin = field.NewBool(tableName, "is_admin")
	_comment.ParentID = field.NewInt32(tableName, "parent_id")
	_comment.PostID = field.NewInt32(tableName, "post_id")
	_comment.Status = field.NewField(tableName, "status")
	_comment.TopPriority = field.NewInt32(tableName, "top_priority")
	_comment.UserAgent = field.NewString(tableName, "user_agent")

	_comment.fillFieldMap()

	return _comment
}

type comment struct {
	commentDo commentDo

	ALL               field.Asterisk
	ID                field.Int32
	Type              field.Field
	CreateTime        field.Time
	UpdateTime        field.Time
	AllowNotification field.Bool
	Author            field.String
	AuthorURL         field.String
	Content           field.String
	Email             field.String
	GravatarMd5       field.String
	IPAddress         field.String
	IsAdmin           field.Bool
	ParentID          field.Int32
	PostID            field.Int32
	Status            field.Field
	TopPriority       field.Int32
	UserAgent         field.String

	fieldMap map[string]field.Expr
}

func (c comment) Table(newTableName string) *comment {
	c.commentDo.UseTable(newTableName)
	return c.updateTableName(newTableName)
}

func (c comment) As(alias string) *comment {
	c.commentDo.DO = *(c.commentDo.As(alias).(*gen.DO))
	return c.updateTableName(alias)
}

func (c *comment) updateTableName(table string) *comment {
	c.ALL = field.NewAsterisk(table)
	c.ID = field.NewInt32(table, "id")
	c.Type = field.NewField(table, "type")
	c.CreateTime = field.NewTime(table, "create_time")
	c.UpdateTime = field.NewTime(table, "update_time")
	c.AllowNotification = field.NewBool(table, "allow_notification")
	c.Author = field.NewString(table, "author")
	c.AuthorURL = field.NewString(table, "author_url")
	c.Content = field.NewString(table, "content")
	c.Email = field.NewString(table, "email")
	c.GravatarMd5 = field.NewString(table, "gravatar_md5")
	c.IPAddress = field.NewString(table, "ip_address")
	c.IsAdmin = field.NewBool(table, "is_admin")
	c.ParentID = field.NewInt32(table, "parent_id")
	c.PostID = field.NewInt32(table, "post_id")
	c.Status = field.NewField(table, "status")
	c.TopPriority = field.NewInt32(table, "top_priority")
	c.UserAgent = field.NewString(table, "user_agent")

	c.fillFieldMap()

	return c
}

func (c *comment) WithContext(ctx context.Context) *commentDo { return c.commentDo.WithContext(ctx) }

func (c comment) TableName() string { return c.commentDo.TableName() }

func (c comment) Alias() string { return c.commentDo.Alias() }

func (c comment) Columns(cols ...field.Expr) gen.Columns { return c.commentDo.Columns(cols...) }

func (c *comment) GetFieldByName(fieldName string) (field.OrderExpr, bool) {
	_f, ok := c.fieldMap[fieldName]
	if !ok || _f == nil {
		return nil, false
	}
	_oe, ok := _f.(field.OrderExpr)
	return _oe, ok
}

func (c *comment) fillFieldMap() {
	c.fieldMap = make(map[string]field.Expr, 17)
	c.fieldMap["id"] = c.ID
	c.fieldMap["type"] = c.Type
	c.fieldMap["create_time"] = c.CreateTime
	c.fieldMap["update_time"] = c.UpdateTime
	c.fieldMap["allow_notification"] = c.AllowNotification
	c.fieldMap["author"] = c.Author
	c.fieldMap["author_url"] = c.AuthorURL
	c.fieldMap["content"] = c.Content
	c.fieldMap["email"] = c.Email
	c.fieldMap["gravatar_md5"] = c.GravatarMd5
	c.fieldMap["ip_address"] = c.IPAddress
	c.fieldMap["is_admin"] = c.IsAdmin
	c.fieldMap["parent_id"] = c.ParentID
	c.fieldMap["post_id"] = c.PostID
	c.fieldMap["status"] = c.Status
	c.fieldMap["top_priority"] = c.TopPriority
	c.fieldMap["user_agent"] = c.UserAgent
}

func (c comment) clone(db *gorm.DB) comment {
	c.commentDo.ReplaceConnPool(db.Statement.ConnPool)
	return c
}

func (c comment) replaceDB(db *gorm.DB) comment {
	c.commentDo.ReplaceDB(db)
	return c
}

type commentDo struct{ gen.DO }

func (c commentDo) Debug() *commentDo {
	return c.withDO(c.DO.Debug())
}

func (c commentDo) WithContext(ctx context.Context) *commentDo {
	return c.withDO(c.DO.WithContext(ctx))
}

func (c commentDo) ReadDB() *commentDo {
	return c.Clauses(dbresolver.Read)
}

func (c commentDo) WriteDB() *commentDo {
	return c.Clauses(dbresolver.Write)
}

func (c commentDo) Session(config *gorm.Session) *commentDo {
	return c.withDO(c.DO.Session(config))
}

func (c commentDo) Clauses(conds ...clause.Expression) *commentDo {
	return c.withDO(c.DO.Clauses(conds...))
}

func (c commentDo) Returning(value interface{}, columns ...string) *commentDo {
	return c.withDO(c.DO.Returning(value, columns...))
}

func (c commentDo) Not(conds ...gen.Condition) *commentDo {
	return c.withDO(c.DO.Not(conds...))
}

func (c commentDo) Or(conds ...gen.Condition) *commentDo {
	return c.withDO(c.DO.Or(conds...))
}

func (c commentDo) Select(conds ...field.Expr) *commentDo {
	return c.withDO(c.DO.Select(conds...))
}

func (c commentDo) Where(conds ...gen.Condition) *commentDo {
	return c.withDO(c.DO.Where(conds...))
}

func (c commentDo) Order(conds ...field.Expr) *commentDo {
	return c.withDO(c.DO.Order(conds...))
}

func (c commentDo) Distinct(cols ...field.Expr) *commentDo {
	return c.withDO(c.DO.Distinct(cols...))
}

func (c commentDo) Omit(cols ...field.Expr) *commentDo {
	return c.withDO(c.DO.Omit(cols...))
}

func (c commentDo) Join(table schema.Tabler, on ...field.Expr) *commentDo {
	return c.withDO(c.DO.Join(table, on...))
}

func (c commentDo) LeftJoin(table schema.Tabler, on ...field.Expr) *commentDo {
	return c.withDO(c.DO.LeftJoin(table, on...))
}

func (c commentDo) RightJoin(table schema.Tabler, on ...field.Expr) *commentDo {
	return c.withDO(c.DO.RightJoin(table, on...))
}

func (c commentDo) Group(cols ...field.Expr) *commentDo {
	return c.withDO(c.DO.Group(cols...))
}

func (c commentDo) Having(conds ...gen.Condition) *commentDo {
	return c.withDO(c.DO.Having(conds...))
}

func (c commentDo) Limit(limit int) *commentDo {
	return c.withDO(c.DO.Limit(limit))
}

func (c commentDo) Offset(offset int) *commentDo {
	return c.withDO(c.DO.Offset(offset))
}

func (c commentDo) Scopes(funcs ...func(gen.Dao) gen.Dao) *commentDo {
	return c.withDO(c.DO.Scopes(funcs...))
}

func (c commentDo) Unscoped() *commentDo {
	return c.withDO(c.DO.Unscoped())
}

func (c commentDo) Create(values ...*entity.Comment) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Create(values)
}

func (c commentDo) CreateInBatches(values []*entity.Comment, batchSize int) error {
	return c.DO.CreateInBatches(values, batchSize)
}

// Save : !!! underlying implementation is different with GORM
// The method is equivalent to executing the statement: db.Clauses(clause.OnConflict{UpdateAll: true}).Create(values)
func (c commentDo) Save(values ...*entity.Comment) error {
	if len(values) == 0 {
		return nil
	}
	return c.DO.Save(values)
}

func (c commentDo) First() (*entity.Comment, error) {
	if result, err := c.DO.First(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Comment), nil
	}
}

func (c commentDo) Take() (*entity.Comment, error) {
	if result, err := c.DO.Take(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Comment), nil
	}
}

func (c commentDo) Last() (*entity.Comment, error) {
	if result, err := c.DO.Last(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Comment), nil
	}
}

func (c commentDo) Find() ([]*entity.Comment, error) {
	result, err := c.DO.Find()
	return result.([]*entity.Comment), err
}

func (c commentDo) FindInBatch(batchSize int, fc func(tx gen.Dao, batch int) error) (results []*entity.Comment, err error) {
	buf := make([]*entity.Comment, 0, batchSize)
	err = c.DO.FindInBatches(&buf, batchSize, func(tx gen.Dao, batch int) error {
		defer func() { results = append(results, buf...) }()
		return fc(tx, batch)
	})
	return results, err
}

func (c commentDo) FindInBatches(result *[]*entity.Comment, batchSize int, fc func(tx gen.Dao, batch int) error) error {
	return c.DO.FindInBatches(result, batchSize, fc)
}

func (c commentDo) Attrs(attrs ...field.AssignExpr) *commentDo {
	return c.withDO(c.DO.Attrs(attrs...))
}

func (c commentDo) Assign(attrs ...field.AssignExpr) *commentDo {
	return c.withDO(c.DO.Assign(attrs...))
}

func (c commentDo) Joins(fields ...field.RelationField) *commentDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Joins(_f))
	}
	return &c
}

func (c commentDo) Preload(fields ...field.RelationField) *commentDo {
	for _, _f := range fields {
		c = *c.withDO(c.DO.Preload(_f))
	}
	return &c
}

func (c commentDo) FirstOrInit() (*entity.Comment, error) {
	if result, err := c.DO.FirstOrInit(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Comment), nil
	}
}

func (c commentDo) FirstOrCreate() (*entity.Comment, error) {
	if result, err := c.DO.FirstOrCreate(); err != nil {
		return nil, err
	} else {
		return result.(*entity.Comment), nil
	}
}

func (c commentDo) FindByPage(offset int, limit int) (result []*entity.Comment, count int64, err error) {
	result, err = c.Offset(offset).Limit(limit).Find()
	if err != nil {
		return
	}

	if size := len(result); 0 < limit && 0 < size && size < limit {
		count = int64(size + offset)
		return
	}

	count, err = c.Offset(-1).Limit(-1).Count()
	return
}

func (c commentDo) ScanByPage(result interface{}, offset int, limit int) (count int64, err error) {
	count, err = c.Count()
	if err != nil {
		return
	}

	err = c.Offset(offset).Limit(limit).Scan(result)
	return
}

func (c commentDo) Scan(result interface{}) (err error) {
	return c.DO.Scan(result)
}

func (c commentDo) Delete(models ...*entity.Comment) (result gen.ResultInfo, err error) {
	return c.DO.Delete(models)
}

func (c *commentDo) withDO(do gen.Dao) *commentDo {
	c.DO = *do.(*gen.DO)
	return c
}