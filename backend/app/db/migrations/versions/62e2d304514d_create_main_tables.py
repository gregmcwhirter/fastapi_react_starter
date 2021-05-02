"""create_main_tables

Revision ID: 62e2d304514d
Revises: 
Create Date: 2021-04-30 13:33:47.063154

"""

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic
revision = '62e2d304514d'
down_revision = None
branch_labels = None
depends_on = None


def create_news_table() -> None:
    op.create_table(
        "news",
        sa.Column("id", sa.Integer, primary_key=True),
        sa.Column("headline", sa.Text, nullable=False, index=True),
        sa.Column("body", sa.Text, nullable=True),
    )


def upgrade() -> None:
    create_news_table()


def downgrade() -> None:
    op.drop_table("news")

